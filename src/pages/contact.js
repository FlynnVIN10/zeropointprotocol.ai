import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './contact.module.css';

export default function Contact() {
  return (
    <Layout
      title="Contact - Zeropoint Protocol"
      description="Get in touch with Zeropoint Protocol for business inquiries, technical support, legal matters, and security concerns.">
      
      <header className={styles.hero}>
        <div className="container">
          <h1>Contact Us</h1>
          <p className="text--lg">
            Get in touch with our team for business, technical, legal, and security inquiries
          </p>
        </div>
      </header>

      <main className={styles.main}>
        {/* Contact Overview */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2>How Can We Help?</h2>
                <p className="text--lg">
                  Our team is ready to assist you with any questions about Zeropoint Protocol's 
                  advanced AI infrastructure, licensing, integration, or support needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Departments */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>📧</div>
                  <h3>General Inquiries</h3>
                  <p className={styles.email}>info@zeropointprotocol.ai</p>
                  <p>
                    For general business inquiries, partnership opportunities, media requests, 
                    and company information. Our business development team will respond within 
                    24 hours.
                  </p>
                  <div className={styles.contactFeatures}>
                    <div className={styles.contactFeature}>
                      <h4>Business Development</h4>
                      <p>Partnership opportunities and strategic alliances</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Media Relations</h4>
                      <p>Press inquiries and media coverage requests</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Company Information</h4>
                      <p>General questions about Zeropoint Protocol</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>⚖️</div>
                  <h3>Legal Department</h3>
                  <p className={styles.email}>legal@zeropointprotocol.ai</p>
                  <p>
                    For licensing agreements, compliance questions, legal matters, and 
                    regulatory inquiries. Our legal team specializes in AI ethics and 
                    intellectual property law.
                  </p>
                  <div className={styles.contactFeatures}>
                    <div className={styles.contactFeature}>
                      <h4>Licensing</h4>
                      <p>License agreements and intellectual property</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Compliance</h4>
                      <p>Regulatory compliance and ethical AI</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Legal Matters</h4>
                      <p>General legal inquiries and disputes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row" style={{marginTop: '2rem'}}>
              <div className="col col--6">
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>🛠️</div>
                  <h3>Technical Support</h3>
                  <p className={styles.email}>support@zeropointprotocol.ai</p>
                  <p>
                    For technical issues, integration support, API questions, and development 
                    assistance. Our engineering team provides comprehensive technical support.
                  </p>
                  <div className={styles.contactFeatures}>
                    <div className={styles.contactFeature}>
                      <h4>API Support</h4>
                      <p>Integration assistance and API documentation</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Technical Issues</h4>
                      <p>Bug reports and technical troubleshooting</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Development</h4>
                      <p>Custom development and implementation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col col--6">
                <div className={styles.contactCard}>
                  <div className={styles.contactIcon}>🔐</div>
                  <h3>Security</h3>
                  <p className={styles.email}>security@zeropointprotocol.ai</p>
                  <p>
                    For security concerns, vulnerability reports, data protection inquiries, 
                    and security-related incidents. Our security team responds to all reports 
                    within 4 hours.
                  </p>
                  <div className={styles.contactFeatures}>
                    <div className={styles.contactFeature}>
                      <h4>Vulnerability Reports</h4>
                      <p>Security vulnerabilities and bug bounty</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Data Protection</h4>
                      <p>Privacy and data security concerns</p>
                    </div>
                    <div className={styles.contactFeature}>
                      <h4>Incident Response</h4>
                      <p>Security incidents and emergency response</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Response Times */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2 text--center">
                <h2>Response Times</h2>
                <p className="text--lg">
                  We're committed to providing timely responses to all inquiries
                </p>
                <div className={styles.responseGrid}>
                  <div className={styles.responseCard}>
                    <h4>🔴 Critical</h4>
                    <p>Security incidents and vulnerabilities</p>
                    <span className={styles.responseTime}>4 hours</span>
                  </div>
                  <div className={styles.responseCard}>
                    <h4>🟡 High</h4>
                    <p>Technical support and legal matters</p>
                    <span className={styles.responseTime}>24 hours</span>
                  </div>
                  <div className={styles.responseCard}>
                    <h4>🟢 Normal</h4>
                    <p>General inquiries and business development</p>
                    <span className={styles.responseTime}>48 hours</span>
                  </div>
                  <div className={styles.responseCard}>
                    <h4>🔵 Low</h4>
                    <p>Media requests and informational inquiries</p>
                    <span className={styles.responseTime}>72 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h2>Company Information</h2>
                <div className={styles.companyInfo}>
                  <div className={styles.infoItem}>
                    <h4>Company Name</h4>
                    <p>Zeropoint Protocol, Inc.</p>
                  </div>
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
              <div className="col col--6">
                <div className={styles.additionalInfo}>
                  <h3>Additional Resources</h3>
                  <div className={styles.resourceList}>
                    <div className={styles.resourceItem}>
                      <h4>📚 Documentation</h4>
                      <p>Complete API documentation and integration guides</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/docs/intro">
                        View Docs →
                      </Link>
                    </div>
                    <div className={styles.resourceItem}>
                      <h4>⚖️ Legal Information</h4>
                      <p>Licensing, compliance, and legal documents</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/legal">
                        View Legal →
                      </Link>
                    </div>
                    <div className={styles.resourceItem}>
                      <h4>🔧 Technology</h4>
                      <p>Technical specifications and feature overview</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/technology">
                        View Technology →
                      </Link>
                    </div>
                    <div className={styles.resourceItem}>
                      <h4>💼 Use Cases</h4>
                      <p>Industry applications and value propositions</p>
                      <Link
                        className="button button--outline button--sm"
                        to="/use-cases">
                        View Use Cases →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className={styles.section}>
          <div className="container">
            <div className="row">
              <div className="col col--8 col--offset-2">
                <h2 className="text--center">Frequently Asked Questions</h2>
                <div className={styles.faqList}>
                  <div className={styles.faqItem}>
                    <h4>How do I get started with Zeropoint Protocol?</h4>
                    <p>
                      Contact our business development team at info@zeropointprotocol.ai to 
                      discuss your needs and explore partnership opportunities.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h4>What licensing options are available?</h4>
                    <p>
                      We offer various licensing models. Contact legal@zeropointprotocol.ai 
                      for detailed information about our licensing terms and agreements.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h4>How do I report a security vulnerability?</h4>
                    <p>
                      Email security@zeropointprotocol.ai with detailed information about 
                      the vulnerability. We respond to all security reports within 4 hours.
                    </p>
                  </div>
                  <div className={styles.faqItem}>
                    <h4>What technical support is available?</h4>
                    <p>
                      Our technical support team provides API assistance, integration help, 
                      and troubleshooting. Contact support@zeropointprotocol.ai for assistance.
                    </p>
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
              <h2>Ready to Get Started?</h2>
              <p className="text--lg margin-bottom--lg">
                Contact us today to begin your journey with ethical AI infrastructure
              </p>
              <div className={styles.buttons}>
                <Link
                  className="button button--primary button--lg"
                  to="mailto:info@zeropointprotocol.ai">
                  Send Email →
                </Link>
                <Link
                  className="button button--outline button--lg"
                  to="/use-cases"
                  style={{marginLeft: '1rem'}}>
                  Explore Use Cases →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
} 