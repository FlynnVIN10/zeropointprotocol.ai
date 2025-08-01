import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import XRVisualizerPreview from '../components/XRVisualizerPreview';
import styles from './visualizer.module.css';

export default function VisualizerPage() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title="Visualizer - Zeropoint Protocol"
      description="Real-time multi-agent consensus visualization with WebXR integration">
      <div className={styles.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Consensus Visualizer</h1>
          <p className={styles.subtitle}>
            Real-time multi-agent consensus visualization with WebXR integration
          </p>
        </div>
        
        <div className={styles.visualizerContainer}>
          <XRVisualizerPreview />
        </div>
        
        <div className={styles.infoPanel}>
          <div className={styles.infoCard}>
            <h3>Performance Metrics</h3>
            <div className={styles.metrics}>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>FPS:</span>
                <span className={styles.metricValue} id="fps">60</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Frame Time:</span>
                <span className={styles.metricValue} id="frameTime">16ms</span>
              </div>
              <div className={styles.metric}>
                <span className={styles.metricLabel}>Active Agents:</span>
                <span className={styles.metricValue} id="activeAgents">0</span>
              </div>
            </div>
          </div>
          
          <div className={styles.infoCard}>
            <h3>Controls</h3>
            <div className={styles.controls}>
              <button className={styles.controlBtn} id="toggleXR">
                Enter XR Mode
              </button>
              <button className={styles.controlBtn} id="resetView">
                Reset View
              </button>
              <button className={styles.controlBtn} id="toggleTrails">
                Toggle Trails
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
} 