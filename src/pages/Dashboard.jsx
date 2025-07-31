import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './Dashboard.module.css';

function DashboardPage() {
  const {siteConfig} = useDocusaurusContext();
  const [statusData, setStatusData] = useState(null);
  const [agentData, setAgentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // Fetch status data
        const statusResponse = await fetch('http://localhost:3000/v1/ui/status');
        if (statusResponse.ok) {
          const statusResult = await statusResponse.json();
          setStatusData(statusResult.data);
        }

        // Fetch agent data
        const agentResponse = await fetch('http://localhost:3000/v1/ui/agents');
        if (agentResponse.ok) {
          const agentResult = await agentResponse.json();
          setAgentData(agentResult.data);
        }

      } catch (err) {
        setError('Failed to fetch dashboard data');
        console.error('Dashboard fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000);
    
    return () => clearInterval(interval);
  }, []);

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
        <div className={styles.radialRing}>
          <div className={styles.radialSegment} style={{ '--rotation': '0deg' }}>
            <span>Health</span>
          </div>
          <div className={styles.radialSegment} style={{ '--rotation': '90deg' }}>
            <span>Agents</span>
          </div>
          <div className={styles.radialSegment} style={{ '--rotation': '180deg' }}>
            <span>Consensus</span>
          </div>
          <div className={styles.radialSegment} style={{ '--rotation': '270deg' }}>
            <span>Status</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <Layout title="Dashboard - Zeropoint Protocol">
        <div className={styles.loadingContainer}>
          <div className={styles.loadingSpinner}></div>
          <p>Loading dashboard data...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout
      title="Dashboard - Zeropoint Protocol"
      description="Real-time system status and agent monitoring">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>System Dashboard</h1>
          <p className={styles.subtitle}>
            Real-time monitoring of Zeropoint Protocol operations
          </p>
        </div>

        {error && (
          <div className={styles.error}>
            <h3>Error</h3>
            <p>{error}</p>
          </div>
        )}

        <div className={styles.content}>
          <div className={styles.mainSection}>
            <div className={styles.visualizationSection}>
              {renderRadialVisualization()}
            </div>
            
            <div className={styles.statusGrid}>
              {renderStatusCard('System Health', statusData?.health, 'success')}
              {renderStatusCard('Agent Statistics', agentData, 'info')}
              {renderStatusCard('Uptime', { uptime: statusData?.uptime }, 'warning')}
            </div>
          </div>

          <div className={styles.metricsSection}>
            <h2 className={styles.sectionTitle}>Key Metrics</h2>
            <div className={styles.metricsGrid}>
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  {statusData?.health?.status || 'Unknown'}
                </div>
                <div className={styles.metricLabel}>System Status</div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  {statusData?.uptime ? `${Math.floor(statusData.uptime / 60)}m` : 'N/A'}
                </div>
                <div className={styles.metricLabel}>Uptime</div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  {agentData?.totalAgents || 'N/A'}
                </div>
                <div className={styles.metricLabel}>Active Agents</div>
              </div>
              
              <div className={styles.metricCard}>
                <div className={styles.metricValue}>
                  {statusData?.health?.services?.database || 'Unknown'}
                </div>
                <div className={styles.metricLabel}>Database</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DashboardPage; 