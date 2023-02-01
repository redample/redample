import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero ', styles.heroBanner)}>
      {/* Removing hero--primary ^ */}
      <div className="container">
        <h1 className="hero__title"><span style={{color: "red"}}>Red</span>Ample</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10}}>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/intro">
                Get Started 🚀
              </Link>
            </div>
              <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/redample/redample">
                Github Repo 📂
              </Link>
            </div>
          </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
