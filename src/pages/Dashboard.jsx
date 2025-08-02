import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Dashboard.module.css';
import { ChatWidget } from '../components/ChatWidget';
import { API_ENDPOINTS, handleApiError } from '../config/api';

function DashboardPage() {
  const {siteConfig} = useDocusaurusContext();
  const [statusData, setStatusData] = useState(null);
  const [agentData, setAgentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdate, setLastUpdate] = useState(null);
  const [statusLoading, setStatusLoading] = useState(false);
  const [agentLoading, setAgentLoading] = useState(false);

  // Separate fetch functions for granular updates
  const fetchStatusData = useCallback(async (showLoading = false) => {
    try {
      if (showLoading) {
        setStatusLoading(true);
      }
      
      const statusResponse = await fetch(API_ENDPOINTS.UI_STATUS, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (statusResponse.ok) {
        const statusResult = await statusResponse.json();
        if (statusResult.success) {
          setStatusData(statusResult.data);
        } else {
          throw new Error(statusResult.error || 'Failed to fetch status data');
        }
      } else {
        // Fallback to health endpoint if UI status fails
        const healthResponse = await fetch(API_ENDPOINTS.HEALTH);
        if (healthResponse.ok) {
          const healthResult = await healthResponse.json();
          setStatusData({
            health: healthResult,
            uptime: healthResult.metrics?.uptime || 0,
            lastUpdate: new Date().toISOString(),
            version: process.env.npm_package_version || '0.0.1',
            environment: process.env.NODE_ENV || 'development',
          });
        } else {
          throw new Error('Health check failed');
        }
      }

      setLastUpdate(new Date().toISOString());
    } catch (err) {
      console.error('Status fetch error:', err);
      setError('Status data temporarily unavailable.');
    } finally {
      setStatusLoading(false);
    }
  }, []);

  const fetchAgentData = useCallback(async (showLoading = false) => {
    try {
      if (showLoading) {
        setAgentLoading(true);
      }
      
      const agentResponse = await fetch(API_ENDPOINTS.UI_AGENTS, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache'
        }
      });
      
      if (agentResponse.ok) {
        const agentResult = await agentResponse.json();
        if (agentResult.success) {
          setAgentData(agentResult.data);
        } else {
          throw new Error(agentResult.error || 'Failed to fetch agent data');
        }
      } else {
        // Fallback data for agents
        setAgentData({
          totalAgents: 16,
          activeAgents: 12,
          agentTypes: {
            'consensus': 4,
            'ethical': 3,
            'monitoring': 3,
            'security': 2
          },
          agentStatusDistribution: {
            'active': 12,
            'idle': 3,
            'maintenance': 1
          },
          recentActivities: [
            { type: 'consensus', timestamp: new Date().toISOString(), status: 'completed' },
            { type: 'ethical_check', timestamp: new Date().toISOString(), status: 'completed' }
          ]
        });
      }

      setLastUpdate(new Date().toISOString());
    } catch (err) {
      console.error('Agent fetch error:', err);
      setError('Agent data temporarily unavailable.');
    } finally {
      setAgentLoading(false);
    }
  }, []);

  // Initial data fetch
  useEffect(() => {
    const initialFetch = async () => {
      setLoading(true);
      setError(null);
      
      try {
        await Promise.all([
          fetchStatusData(false),
          fetchAgentData(false)
        ]);
      } catch (err) {
        console.error('Initial fetch error:', err);
        setError('Dashboard data temporarily unavailable. Some features may be limited.');
      } finally {
        setLoading(false);
      }
    };

    initialFetch();
  }, [fetchStatusData, fetchAgentData]);

  // Manual refresh handler
  const handleRefresh = useCallback(() => {
    fetchStatusData(true);
    fetchAgentData(true);
  }, [fetchStatusData, fetchAgentData]);

  // Auto-refresh only status data (less intrusive)
  useEffect(() => {
    const interval = setInterval(() => {
      fetchStatusData(false); // Silent update
    }, 60000); // Every minute instead of 30 seconds
    
    return () => clearInterval(interval);
  }, [fetchStatusData]);

  const renderStatusCard = (title, data, type = 'info') => (
    <div className={clsx(styles.card, styles[type])}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <div className={styles.cardContent}>
        {data ? (
          <pre className={styles.jsonData}>
            {JSON.stringify(data, null, 2)}
          </pre>
        ) : (
          <p className={styles.noData}>No data available</p>
        )}
      </div>
    </div>
  );

  const renderRadialVisualization = () => (
    <div className={styles.radialContainer}>
      <div className={styles.radialChart}>
        <div className={styles.centerCircle}>
          <div className={styles.centerText}>ZEROPOINT</div>
        </div>
        <div className={styles.outerRing}>
          <div className={styles.ringSegment} style={{ transform: 'rotate(0deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(45deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(90deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(135deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(180deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(225deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(270deg)' }}></div>
          <div className={styles.ringSegment} style={{ transform: 'rotate(315deg)' }}></div>
        </div>
      </div>
    </div>
  );

  const renderMetricsGrid = () => {
    if (!statusData || !agentData) return null;

    const metrics = [
      {
        title: 'System Status',
        value: statusData.health?.status || 'unknown',
        type: statusData.health?.status === 'operational' ? 'success' : 'warning',
        loading: statusLoading
      },
      {
        title: 'Uptime',
        value: `${Math.floor((statusData.uptime || 0) / 3600)}h ${Math.floor(((statusData.uptime || 0) % 3600) / 60)}m`,
        type: 'info',
        loading: statusLoading
      },
      {
        title: 'Active Agents',
        value: `${agentData.activeAgents || 0}/${agentData.totalAgents || 0}`,
        type: 'info',
        loading: agentLoading
      },
      {
        title: 'Response Time',
        value: statusData.health?.metrics?.responseTime || 'N/A',
        type: 'info',
        loading: statusLoading
      }
    ];

    return (
      <div className={styles.metricsGrid}>
        {metrics.map((metric, index) => (
          <div key={index} className={clsx(styles.metricCard, styles[metric.type])}>
            <h4 className={styles.metricTitle}>{metric.title}</h4>
            <div className={styles.metricValue}>
              {metric.loading ? (
                <span className={styles.loadingIndicator}>Updating...</span>
              ) : (
                metric.value
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Layout
      title="Dashboard - Zeropoint Protocol"
      description="Real-time monitoring and control center for the Zeropoint Protocol">
      
      <main className={styles.main}>
        <div className="container">
          <div className={styles.header}>
            <h1>Zeropoint Protocol Dashboard</h1>
            <div className={styles.headerControls}>
              <button 
                onClick={handleRefresh}
                disabled={statusLoading || agentLoading}
                className={styles.refreshButton}
              >
                {statusLoading || agentLoading ? 'Refreshing...' : 'Refresh'}
              </button>
              {lastUpdate && (
                <span className={styles.lastUpdate}>
                  Last updated: {new Date(lastUpdate).toLocaleTimeString()}
                </span>
              )}
            </div>
          </div>

          {error && (
            <div className={styles.errorBanner}>
              <p>{error}</p>
            </div>
          )}

          <div className={styles.dashboardGrid}>
            <div className={styles.leftColumn}>
              {renderRadialVisualization()}
              {renderMetricsGrid()}
            </div>
            
            <div className={styles.rightColumn}>
              <div className={styles.chatSection}>
                <h2>Symbiotic Chat</h2>
                <p>Interact with our AI agents to learn about the protocol</p>
                <div className={styles.chatContainer}>
                  <ChatWidget />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.dataSection}>
            <h2>System Data</h2>
            <div className={styles.dataGrid}>
              {renderStatusCard('Health Status', statusData?.health, 'success')}
              {renderStatusCard('Agent Statistics', agentData, 'info')}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default DashboardPage; 