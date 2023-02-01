import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Handcrafted by Developers & Experts',
    Svg: require('@site/static/img/undraw_engineering_team.svg').default,
    description: (
      <>
         {/*    Describe RedAmple auto pilot blog framework */}
          Built by developers for developers and content creators. RedAmple is a blog framework that allows you to focus on writing content and let RedAmple do the rest.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_solution_mindset.svg').default,
    description: (
      <>
        RedAmple lets you focus on your business, and we&apos;ll do the chores. Go ahead and move your blog to RedAmple.
          It&apos;s easy to setup and even easier to use. But ideally, you should not have to use it at all.
      </>
    ),
  },
  {
    title: 'Powered by Best Technologies',
    Svg: require('@site/static/img/undraw_to_the_moon.svg').default,
    description: (
      <>
        RedAmple is built with latest frontend & backend frameworks as well as latest AI technologies. So, it not just is fast, secure, reliable and future proof. But it is the future of blogging.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
