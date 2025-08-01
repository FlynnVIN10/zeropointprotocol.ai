import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '🤖 Multi-Agent Collaboration',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Advanced swarm intelligence enabling multiple AI agents to work together seamlessly 
        with coordinated decision-making and shared knowledge.
      </>
    ),
  },
  {
    title: '🔒 Ethical AI Framework',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Zeroth-gate validation system ensuring all AI operations align with ethical principles 
        before execution, providing safety and accountability.
      </>
    ),
  },
  {
    title: '📊 Decentralized Governance',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        IPFS-based Soulchain ledger providing transparent audit trails and decentralized 
        governance for AI operations and decision-making.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
