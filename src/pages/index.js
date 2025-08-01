import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
<<<<<<< HEAD
=======
import HomepageFeatures from '../components/HomepageFeatures';
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
<<<<<<< HEAD
        <h1 className="hero__title">Zeropoint Protocol</h1>
        <p className="hero__subtitle">Advanced AI Infrastructure with Ethical Alignment</p>
=======
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/technology">
<<<<<<< HEAD
            Explore Technology →
          </Link>
          <Link
            className="button button--outline button--lg"
            to="/use-cases"
            style={{marginLeft: '1rem'}}>
            View Use Cases →
=======
            Get Started
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
          </Link>
        </div>
      </div>
    </header>
  );
}

<<<<<<< HEAD
function MissionSection() {
  return (
    <section className={styles.missionSection}>
      <div className="container">
        <div className="row">
          <div className="col col--8 col--offset-2 text--center">
            <h2>Our Mission</h2>
            <p className="text--lg">
              Zeropoint Protocol is pioneering the future of AI infrastructure by combining 
              cutting-edge artificial intelligence with uncompromising ethical standards. 
              We provide enterprise-grade AI services that are not only powerful and scalable, 
              but also aligned with human values and safety.
            </p>
            <div className="row" style={{marginTop: '2rem'}}>
              <div className="col col--4">
                <div className={styles.missionCard}>
                  <h3>🤖 Advanced AI</h3>
                  <p>State-of-the-art language models, code generation, and image synthesis</p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.missionCard}>
                  <h3>🛡️ Ethical Alignment</h3>
                  <p>Zeroth-gate validation ensures all AI operations align with human values</p>
                </div>
              </div>
              <div className="col col--4">
                <div className={styles.missionCard}>
                  <h3>🔗 Decentralized</h3>
                  <p>IPFS-powered storage and Soulchain audit trails for transparency</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">
          <h2>Core Technology</h2>
          <p className="text--lg">
            Built on a foundation of advanced AI, blockchain technology, and ethical principles
          </p>
        </div>
        <div className="row">
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>🧠 AI Generation Services</h3>
              <ul>
                <li>Text generation with context awareness</li>
                <li>Code generation and optimization</li>
                <li>Image synthesis and manipulation</li>
                <li>Semantic search and analysis</li>
                <li>Sentiment analysis and entity extraction</li>
                <li>Multi-language translation</li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>🔐 Security & Compliance</h3>
              <ul>
                <li>JWT-based authentication system</li>
                <li>Rate limiting and throttling</li>
                <li>Zeroth-gate ethical validation</li>
                <li>IPFS decentralized storage</li>
                <li>Soulchain audit trails</li>
                <li>Prometheus monitoring</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row" style={{marginTop: '2rem'}}>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>⚡ Performance & Scalability</h3>
              <ul>
                <li>NestJS TypeScript backend</li>
                <li>Python AI service integration</li>
                <li>Docker containerization</li>
                <li>Service orchestration</li>
                <li>Batch processing capabilities</li>
                <li>Health monitoring endpoints</li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className={styles.featureCard}>
              <h3>🌐 Enterprise Ready</h3>
              <ul>
                <li>RESTful API with OpenAPI docs</li>
                <li>Comprehensive test coverage</li>
                <li>Production deployment ready</li>
                <li>Monitoring and logging</li>
                <li>Error handling and validation</li>
                <li>Documentation and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className="text--center">
          <h2>Ready to Get Started?</h2>
          <p className="text--lg margin-bottom--lg">
            Join the future of ethical AI infrastructure
          </p>
          <div className={styles.buttons}>
            <Link
              className="button button--primary button--lg"
              to="/contact">
              Contact Us →
            </Link>
            <Link
              className="button button--outline button--lg"
              to="/legal"
              style={{marginLeft: '1rem'}}>
              Legal Information →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

=======
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
<<<<<<< HEAD
      title="Zeropoint Protocol - Advanced AI Infrastructure with Ethical Alignment"
      description="Enterprise-grade AI services with uncompromising ethical standards. Advanced language models, code generation, and image synthesis with Zeroth-gate validation.">
      <HomepageHeader />
      <main>
        <MissionSection />
        <FeaturesSection />
        <CTASection />
=======
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
>>>>>>> 71c525b4c2247256a3563b1760f4d079f362ecdc
      </main>
    </Layout>
  );
}
