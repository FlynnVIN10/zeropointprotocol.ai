import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './use-cases.module.css';

export default function UseCases() {
  return (
    <Layout
      title="Use Cases - Zeropoint Protocol"
      description="Discover how Zeropoint Protocol's advanced AI infrastructure delivers value across industries with ethical alignment and enterprise-grade performance.">
      
      <header className={styles.hero}>
        <div className="container">
          <h1>Use Cases</h1>
          <p className="text--lg">
            Transforming Industries with Ethical AI Infrastructure
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {/* Enterprise AI */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>🏢 Enterprise AI Solutions</h2>
                <p>
                  Empower your organization with enterprise-grade AI capabilities that scale 
                  with your business needs while maintaining the highest ethical standards.
                </p>
                <div className={styles.useCaseList}>
                  <div className={styles.useCaseItem}>
                    <h4>Content Generation</h4>
                    <p>Automate marketing copy, technical documentation, and creative content with context-aware AI</p>
                    <ul>
                      <li>Marketing campaign automation</li>
                      <li>Technical documentation generation</li>
                      <li>Creative content creation</li>
                      <li>Multi-language content localization</li>
                    </ul>
                  </div>
                  <div className={styles.useCaseItem}>
                    <h4>Code Development</h4>
                    <p>Accelerate software development with intelligent code generation and optimization</p>
                    <ul>
                      <li>Automated code generation</li>
                      <li>Code review and optimization</li>
                      <li>Documentation generation</li>
                      <li>Bug detection and fixes</li>
                    </ul>
                  </div>
                  <div className={styles.useCaseItem}>
                    <h4>Data Analysis</h4>
                    <p>Extract insights from unstructured data with advanced NLP and sentiment analysis</p>
                    <ul>
                      <li>Customer feedback analysis</li>
                      <li>Market sentiment tracking</li>
                      <li>Entity extraction from documents</li>
                      <li>Trend identification and forecasting</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.valueCard}>
                  <h3>Enterprise Value</h3>
                  <div className={styles.valueItem}>
                    <h4>🚀 10x Faster Development</h4>
                    <p>Accelerate AI integration with our pre-built infrastructure</p>
                  </div>
                  <div className={styles.valueItem}>
                    <h4>🛡️ Risk Mitigation</h4>
                    <p>Built-in ethical validation reduces compliance and reputational risks</p>
                  </div>
                  <div className={styles.valueItem}>
                    <h4>💰 Cost Optimization</h4>
                    <p>Reduce infrastructure costs with our scalable, pay-as-you-use model</p>
                  </div>
                  <div className={styles.valueItem}>
                    <h4>🔒 Enterprise Security</h4>
                    <p>JWT authentication, rate limiting, and comprehensive audit trails</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Healthcare */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.industryCard}>
                  <h3>🏥 Healthcare & Life Sciences</h3>
                  <p>
                    Transform healthcare delivery with AI-powered solutions that prioritize 
                    patient safety and regulatory compliance.
                  </p>
                  <div className={styles.industryFeatures}>
                    <div className={styles.industryFeature}>
                      <h4>Medical Documentation</h4>
                      <p>Automated medical report generation and analysis</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Drug Discovery</h4>
                      <p>AI-assisted molecular analysis and compound screening</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Patient Care</h4>
                      <p>Personalized treatment recommendations and monitoring</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Research Acceleration</h4>
                      <p>Literature analysis and hypothesis generation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <h2>🏥 Healthcare Innovation</h2>
                <p>
                  Our ethical AI infrastructure ensures that healthcare applications meet 
                  the highest standards of safety, privacy, and regulatory compliance.
                </p>
                <div className={styles.benefitsList}>
                  <div className={styles.benefitItem}>
                    <h4>HIPAA Compliance</h4>
                    <p>Built-in privacy controls and audit trails for patient data</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <h4>FDA Alignment</h4>
                    <p>Ethical validation ensures regulatory compliance</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <h4>Clinical Safety</h4>
                    <p>Zeroth-gate validation prevents harmful recommendations</p>
                  </div>
                  <div className={styles.benefitItem}>
                    <h4>Research Integrity</h4>
                    <p>Transparent audit trails for clinical research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Financial Services */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>💼 Financial Services</h2>
                <p>
                  Revolutionize financial services with AI-powered solutions that enhance 
                  decision-making while maintaining regulatory compliance and ethical standards.
                </p>
                <div className={styles.financeUseCases}>
                  <div className={styles.financeCase}>
                    <h4>Risk Assessment</h4>
                    <p>AI-powered credit scoring and risk modeling with ethical bias detection</p>
                  </div>
                  <div className={styles.financeCase}>
                    <h4>Fraud Detection</h4>
                    <p>Real-time transaction monitoring and anomaly detection</p>
                  </div>
                  <div className={styles.financeCase}>
                    <h4>Customer Service</h4>
                    <p>Intelligent chatbots and personalized financial advice</p>
                  </div>
                  <div className={styles.financeCase}>
                    <h4>Compliance Automation</h4>
                    <p>Automated regulatory reporting and compliance monitoring</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.industryCard}>
                  <h3>💼 Financial Innovation</h3>
                  <p>
                    Our infrastructure provides the security, transparency, and compliance 
                    features required for financial services applications.
                  </p>
                  <div className={styles.industryFeatures}>
                    <div className={styles.industryFeature}>
                      <h4>Regulatory Compliance</h4>
                      <p>Built-in compliance with FINRA, SEC, and other regulations</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Audit Trails</h4>
                      <p>Complete transaction history for regulatory reporting</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Bias Prevention</h4>
                      <p>Ethical validation prevents discriminatory practices</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Data Security</h4>
                      <p>Enterprise-grade security for sensitive financial data</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.industryCard}>
                  <h3>🎓 Education & Research</h3>
                  <p>
                    Transform education and research with AI-powered tools that enhance 
                    learning outcomes and accelerate discovery.
                  </p>
                  <div className={styles.industryFeatures}>
                    <div className={styles.industryFeature}>
                      <h4>Personalized Learning</h4>
                      <p>Adaptive learning paths and intelligent tutoring systems</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Research Acceleration</h4>
                      <p>Literature analysis and hypothesis generation</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Content Creation</h4>
                      <p>Automated educational content and assessment generation</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Student Support</h4>
                      <p>Intelligent chatbots and academic advising</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <h2>🎓 Educational Technology</h2>
                <p>
                  Our ethical AI infrastructure ensures that educational applications 
                  promote learning while maintaining academic integrity and student privacy.
                </p>
                <div className={styles.educationBenefits}>
                  <div className={styles.educationBenefit}>
                    <h4>Academic Integrity</h4>
                    <p>Ethical validation prevents cheating and plagiarism</p>
                  </div>
                  <div className={styles.educationBenefit}>
                    <h4>Student Privacy</h4>
                    <p>FERPA-compliant data handling and privacy protection</p>
                  </div>
                  <div className={styles.educationBenefit}>
                    <h4>Inclusive Learning</h4>
                    <p>Bias detection ensures equitable educational experiences</p>
                  </div>
                  <div className={styles.educationBenefit}>
                    <h4>Research Ethics</h4>
                    <p>Transparent audit trails for academic research</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Government */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>🏛️ Government & Public Sector</h2>
                <p>
                  Modernize government services with AI-powered solutions that enhance 
                  efficiency while maintaining transparency and public trust.
                </p>
                <div className={styles.govUseCases}>
                  <div className={styles.govCase}>
                    <h4>Citizen Services</h4>
                    <p>Intelligent chatbots and automated service processing</p>
                  </div>
                  <div className={styles.govCase}>
                    <h4>Policy Analysis</h4>
                    <p>Data-driven policy recommendations and impact assessment</p>
                  </div>
                  <div className={styles.govCase}>
                    <h4>Public Safety</h4>
                    <p>Predictive policing and emergency response optimization</p>
                  </div>
                  <div className={styles.govCase}>
                    <h4>Regulatory Compliance</h4>
                    <p>Automated compliance monitoring and reporting</p>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.industryCard}>
                  <h3>🏛️ Public Sector Innovation</h3>
                  <p>
                    Our infrastructure provides the transparency, accountability, and 
                    security required for government applications.
                  </p>
                  <div className={styles.industryFeatures}>
                    <div className={styles.industryFeature}>
                      <h4>Transparency</h4>
                      <p>Public audit trails and open data initiatives</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Accountability</h4>
                      <p>Clear responsibility for all AI-driven decisions</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Security</h4>
                      <p>FISMA-compliant security for government data</p>
                    </div>
                    <div className={styles.industryFeature}>
                      <h4>Equity</h4>
                      <p>Bias detection ensures fair treatment for all citizens</p>
                    </div>
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
              <h2>Ready to Transform Your Industry?</h2>
              <p className="text--lg margin-bottom--lg">
                Join leading organizations using Zeropoint Protocol to build the future
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/contact">
                  Start Your Journey →
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/technology"
                  style={{marginLeft: '1rem'}}>
                  Explore Technology →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 