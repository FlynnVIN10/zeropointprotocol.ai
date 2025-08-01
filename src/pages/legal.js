import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './legal.module.css';

export default function Legal() {
  return (
    <Layout
      title="Legal - Zeropoint Protocol"
      description="Legal information, licensing, and compliance documents for Zeropoint Protocol, Inc.">
      
      <header className={styles.hero}>
        <div className="container">
          <h1>Legal Information</h1>
          <p className="text--lg">
            Transparency and Compliance for Ethical AI Development
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {/* Company Information */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2>Zeropoint Protocol, Inc.</h2>
                <p className="text--lg">
                  A Texas C Corporation with principal offices in Austin, TX
                </p>
                <div className={styles.companyInfo}>
                  <div className={styles.infoItem}>
                    <h4>Corporate Status</h4>
                    <p>Texas C Corporation</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>Principal Offices</h4>
                    <p>Austin, Texas</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>Founded</h4>
                    <p>2025</p>
                  </div>
                  <div className={styles.infoItem}>
                    <h4>Mission</h4>
                    <p>Advanced AI Infrastructure with Ethical Alignment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Licensing */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>📄 Licensing</h2>
                <p>
                  Our licensing framework ensures responsible use of AI technology while 
                  protecting intellectual property and maintaining ethical standards.
                </p>
                <div className={styles.legalCard}>
                  <h3>View-Only License</h3>
                  <p>
                    Zeropoint Protocol operates under a View-Only License that prohibits 
                    cloning, modification, running, or distribution without a signed agreement.
                  </p>
                  <div className={styles.licenseFeatures}>
                    <div className={styles.licenseFeature}>
                      <h4>No Clone</h4>
                      <p>Reproduction of code or technology is prohibited</p>
                    </div>
                    <div className={styles.licenseFeature}>
                      <h4>No Modify</h4>
                      <p>Alteration of source code requires explicit permission</p>
                    </div>
                    <div className={styles.licenseFeature}>
                      <h4>No Run</h4>
                      <p>Execution requires proper licensing agreement</p>
                    </div>
                    <div className={styles.licenseFeature}>
                      <h4>No Distribute</h4>
                      <p>Distribution is restricted to authorized parties</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.documentsCard}>
                  <h3>Legal Documents</h3>
                  <div className={styles.documentList}>
                    <div className={styles.documentItem}>
                      <h4>📋 LICENSE.md</h4>
                      <p>Complete licensing terms and conditions</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/docs/license">
                        View License →
                      </Link>
                    </div>
                    <div className={styles.documentItem}>
                      <h4>🤝 CLA.md</h4>
                      <p>Contributor License Agreement</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/docs/license">
                        View CLA →
                      </Link>
                    </div>
                    <div className={styles.documentItem}>
                      <h4>⚖️ ZAA.md</h4>
                      <p>Zeropoint Agreement for AI</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/docs/license">
                        View ZAA →
                      </Link>
                    </div>
                    <div className={styles.documentItem}>
                      <h4>🏢 LEGAL.md</h4>
                      <p>General legal information and disclaimers</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/docs/license">
                        View Legal →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.complianceCard}>
                  <h3>🔒 Compliance & Ethics</h3>
                  <p>
                    Our commitment to ethical AI development is reflected in our comprehensive 
                    compliance framework and governance structure.
                  </p>
                  <div className={styles.complianceFeatures}>
                    <div className={styles.complianceFeature}>
                      <h4>Zeroth-Gate Validation</h4>
                      <p>Ethical alignment checking for all AI operations</p>
                    </div>
                    <div className={styles.complianceFeature}>
                      <h4>Audit Trails</h4>
                      <p>Complete transparency through Soulchain logging</p>
                    </div>
                    <div className={styles.complianceFeature}>
                      <h4>Bias Detection</h4>
                      <p>Automated identification and mitigation of algorithmic bias</p>
                    </div>
                    <div className={styles.complianceFeature}>
                      <h4>Privacy Protection</h4>
                      <p>GDPR, CCPA, and other privacy regulation compliance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <h2>⚖️ Regulatory Compliance</h2>
                <p>
                  We maintain compliance with relevant regulations and industry standards 
                  to ensure responsible AI development and deployment.
                </p>
                <div className={styles.regulatoryList}>
                  <div className={styles.regulatoryItem}>
                    <h4>Data Protection</h4>
                    <ul>
                      <li>GDPR (General Data Protection Regulation)</li>
                      <li>CCPA (California Consumer Privacy Act)</li>
                      <li>HIPAA (Healthcare Information Privacy)</li>
                      <li>FERPA (Educational Records Privacy)</li>
                    </ul>
                  </div>
                  <div className={styles.regulatoryItem}>
                    <h4>AI Ethics</h4>
                    <ul>
                      <li>IEEE Ethics in Action</li>
                      <li>ACM Code of Ethics</li>
                      <li>UNESCO AI Ethics Framework</li>
                      <li>OECD AI Principles</li>
                    </ul>
                  </div>
                  <div className={styles.regulatoryItem}>
                    <h4>Industry Standards</h4>
                    <ul>
                      <li>ISO 27001 (Information Security)</li>
                      <li>ISO 42001 (AI Management)</li>
                      <li>NIST AI Risk Management</li>
                      <li>IEEE 2857 (AI Bias)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2>📞 Legal Contact Information</h2>
                <p className="text--lg">
                  For legal inquiries, licensing agreements, and compliance questions
                </p>
                <div className={styles.contactGrid}>
                  <div className={styles.contactCard}>
                    <h3>📧 General Inquiries</h3>
                    <p>info@zeropointprotocol.ai</p>
                    <p>For general business and partnership inquiries</p>
                  </div>
                  <div className={styles.contactCard}>
                    <h3>⚖️ Legal Department</h3>
                    <p>legal@zeropointprotocol.ai</p>
                    <p>For licensing, compliance, and legal matters</p>
                  </div>
                  <div className={styles.contactCard}>
                    <h3>🛠️ Technical Support</h3>
                    <p>support@zeropointprotocol.ai</p>
                    <p>For technical issues and integration support</p>
                  </div>
                  <div className={styles.contactCard}>
                    <h3>🔐 Security</h3>
                    <p>security@zeropointprotocol.ai</p>
                    <p>For security concerns and vulnerability reports</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimers */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <div className={styles.disclaimerCard}>
                  <h3>⚠️ Important Disclaimers</h3>
                  <div className={styles.disclaimerList}>
                    <div className={styles.disclaimerItem}>
                      <h4>No Legal Advice</h4>
                      <p>
                        The information provided on this page is for informational purposes only 
                        and does not constitute legal advice. Please consult with qualified legal 
                        counsel for specific legal matters.
                      </p>
                    </div>
                    <div className={styles.disclaimerItem}>
                      <h4>Technology Limitations</h4>
                      <p>
                        AI technology has inherent limitations and risks. Users should understand 
                        these limitations and use our services responsibly and in accordance with 
                        applicable laws and regulations.
                      </p>
                    </div>
                    <div className={styles.disclaimerItem}>
                      <h4>Third-Party Services</h4>
                      <p>
                        Our services may integrate with third-party services. We are not responsible 
                        for the privacy practices or content of third-party services.
                      </p>
                    </div>
                    <div className={styles.disclaimerItem}>
                      <h4>Updates and Changes</h4>
                      <p>
                        Legal terms and policies may be updated periodically. Users are responsible 
                        for staying informed of current terms and conditions.
                      </p>
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
              <h2>Need Legal Assistance?</h2>
              <p className="text--lg margin-bottom--lg">
                Contact our legal team for licensing, compliance, and partnership inquiries
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="/contact">
                  Contact Legal Team →
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/docs/license"
                  style={{marginLeft: '1rem'}}>
                  View Full License →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 
