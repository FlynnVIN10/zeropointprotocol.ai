import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './technology.module.css';
import Link from '@docusaurus/Link';
import styles from './technology.module.css';

export default function Technology() {
  return (
    <Layout
      title="Technology - Zeropoint Protocol"
      description="Explore the advanced AI infrastructure, ethical alignment systems, and technical architecture of Zeropoint Protocol.">
      
      <header className={styles.hero}>
        <div className="container">
          <h1>Technology</h1>
          <p className="text--lg">
            Advanced AI Infrastructure with Uncompromising Ethical Standards
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {/* AI Generation Services */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>🧠 AI Generation Services</h2>
                <p>
                  Our comprehensive suite of AI generation services provides state-of-the-art 
                  capabilities for text, code, and image generation with context awareness 
                  and ethical validation.
                </p>
                <div className={styles.featureList}>
                  <div className={styles.featureItem}>
                    <h4>Text Generation</h4>
                    <p>Advanced language models with context awareness and style control</p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4>Code Generation</h4>
                    <p>Intelligent code synthesis with optimization and best practices</p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4>Image Synthesis</h4>
                    <p>High-quality image generation and manipulation capabilities</p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4>Semantic Search</h4>
                    <p>Advanced document search with relevance scoring and ranking</p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4>Sentiment Analysis</h4>
                    <p>Real-time sentiment detection with confidence scoring</p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4>Entity Extraction</h4>
                    <p>Named entity recognition with high accuracy and confidence</p>
                  </div>
                  <div className={styles.featureItem}>
                    <h4>Translation</h4>
                    <p>Multi-language translation with cultural context awareness</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.techCard}>
                  <h3>Advanced Features</h3>
                  <ul>
                    <li>Context-aware prompting and generation</li>
                    <li>Batch processing for high-throughput operations</li>
                    <li>Real-time streaming responses</li>
                    <li>Custom model fine-tuning capabilities</li>
                    <li>Multi-modal input processing</li>
                    <li>Intelligent error recovery and retry logic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Security & Compliance */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.techCard}>
                  <h3>🔐 Security & Compliance</h3>
                  <ul>
                    <li><strong>JWT Authentication:</strong> Secure token-based authentication system</li>
                    <li><strong>Rate Limiting:</strong> Advanced throttling and request management</li>
                    <li><strong>Zeroth-Gate Validation:</strong> Ethical alignment checking for all operations</li>
                    <li><strong>IPFS Storage:</strong> Decentralized, immutable data storage</li>
                    <li><strong>Soulchain Auditing:</strong> Complete audit trails for transparency</li>
                    <li><strong>Prometheus Monitoring:</strong> Real-time metrics and alerting</li>
                  </ul>
                </div>
              </div>
              <div className="col col--6">
                <h2>🛡️ Ethical Alignment</h2>
                <p>
                  Our Zeroth-gate validation system ensures that all AI operations align with 
                  human values and safety standards. Every request is evaluated for ethical 
                  compliance before processing.
                </p>
                <div className={styles.ethicalFeatures}>
                  <div className={styles.ethicalItem}>
                    <h4>Content Filtering</h4>
                    <p>Automatic detection and blocking of harmful content</p>
                  </div>
                  <div className={styles.ethicalItem}>
                    <h4>Bias Detection</h4>
                    <p>Identification and mitigation of algorithmic bias</p>
                  </div>
                  <div className={styles.ethicalItem}>
                    <h4>Transparency</h4>
                    <p>Complete audit trails for all AI operations</p>
                  </div>
                  <div className={styles.ethicalItem}>
                    <h4>Accountability</h4>
                    <p>Clear responsibility and traceability for all actions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Performance & Scalability */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>⚡ Performance & Scalability</h2>
                <p>
                  Built on modern, scalable architecture with enterprise-grade performance 
                  and reliability. Our system is designed to handle high-throughput workloads 
                  with minimal latency.
                </p>
                <div className={styles.performanceFeatures}>
                  <div className={styles.performanceItem}>
                    <h4>NestJS Backend</h4>
                    <p>TypeScript-based, modular architecture with dependency injection</p>
                  </div>
                  <div className={styles.performanceItem}>
                    <h4>Python AI Services</h4>
                    <p>Optimized Python backend for AI model inference</p>
                  </div>
                  <div className={styles.performanceItem}>
                    <h4>Docker Containerization</h4>
                    <p>Consistent deployment across all environments</p>
                  </div>
                  <div className={styles.performanceItem}>
                    <h4>Service Orchestration</h4>
                    <p>Intelligent coordination of multiple AI services</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.techCard}>
                  <h3>Technical Specifications</h3>
                  <ul>
                    <li><strong>Response Time:</strong> &lt; 100ms for simple operations</li>
                    <li><strong>Throughput:</strong> 10,000+ requests per minute</li>
                    <li><strong>Availability:</strong> 99.9% uptime SLA</li>
                    <li><strong>Scalability:</strong> Horizontal scaling with auto-scaling</li>
                    <li><strong>Monitoring:</strong> Real-time health checks and metrics</li>
                    <li><strong>Backup:</strong> Automated backup and disaster recovery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise Features */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.techCard}>
                  <h3>🌐 Enterprise Ready</h3>
                  <ul>
                    <li><strong>RESTful API:</strong> Standard HTTP endpoints with OpenAPI documentation</li>
                    <li><strong>Comprehensive Testing:</strong> 95%+ test coverage with automated CI/CD</li>
                    <li><strong>Production Ready:</strong> Battle-tested in enterprise environments</li>
                    <li><strong>Monitoring:</strong> Advanced logging and observability</li>
                    <li><strong>Error Handling:</strong> Robust error recovery and validation</li>
                    <li><strong>Documentation:</strong> Complete API and integration guides</li>
                  </ul>
                </div>
              </div>
              <div className="col col--6">
                <h2>🔗 Decentralized Infrastructure</h2>
                <p>
                  Our decentralized approach ensures data sovereignty, transparency, and 
                  resilience. IPFS storage and Soulchain auditing provide immutable records 
                  of all operations.
                </p>
                <div className={styles.decentralizedFeatures}>
                  <div className={styles.decentralizedItem}>
                    <h4>IPFS Storage</h4>
                    <p>Distributed, content-addressed storage for data integrity</p>
                  </div>
                  <div className={styles.decentralizedItem}>
                    <h4>Soulchain Ledger</h4>
                    <p>Immutable audit trails for all AI operations</p>
                  </div>
                  <div className={styles.decentralizedItem}>
                    <h4>DID Integration</h4>
                    <p>Decentralized identity management for users and services</p>
                  </div>
                  <div className={styles.decentralizedItem}>
                    <h4>Zero-Knowledge Proofs</h4>
                    <p>Privacy-preserving verification of operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container">
            <div className="text--center">
              <h2>Ready to Integrate?</h2>
              <p className="text--lg margin-bottom--lg">
                Start building with our advanced AI infrastructure today
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/contact">
                  Get Started →
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/use-cases"
                  style={{marginLeft: '1rem'}}>
                  View Use Cases →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 