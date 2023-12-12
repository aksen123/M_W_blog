import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import './index.module.css';


export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={`기록을 해보자`}
      description="Description will go into a meta tag in <head />">
      <main>
        <h1>늦었다고 생각 할때가 너무 늦었다</h1>
        <p>그러니 더 열심히 기록하자✏️</p>
        <img className='mainImage' src='/img/ms.jpg'/>
      </main>
    </Layout>
  );
}
