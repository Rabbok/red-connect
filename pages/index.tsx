import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';

const Home: React.FC = () => {
  return (
    <Layout>
      <Head>
        <title>RedConnect</title>
      </Head>
    </Layout>
  );
};

export default Home;