import React from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import { GetStaticProps } from 'next';
import getPosts from './api/redditPosts';
import { HomeProps } from '@/types/types';

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <Layout posts={posts}>
      <Head>
        <title>RedConnect</title>
      </Head>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getPosts('programming', 100);

  return {
    props: {
      posts,
    },
  };
}

export default Home;