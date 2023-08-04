import React, { useEffect } from 'react';
import Head from 'next/head';
import Layout from '@/components/layout/Layout';
import getPosts from './api/redditPosts';
import { HomeProps } from '@/types/types';
import store from '@/components/store/store';
import { setDataState } from '@/components/store/postDataSlice';
import { useDispatch, useSelector } from 'react-redux';

const Home: React.FC<HomeProps> = () => {
  const dispatch = useDispatch();
  const dataState = useSelector((state: any) => state.data.dataState);
  const searchQuery = useSelector((state: any) => state.search.searchQuery);
  const filterState = useSelector((state: any) => state.filter.filterState);

  useEffect(() => {
    if (dataState.length === 0) {
      getUpdatedPosts(searchQuery);
    }
  }, []);

  useEffect(() => {
    getUpdatedPosts(searchQuery);
  }, [searchQuery, filterState]);

  const getUpdatedPosts = async (query: any) => {
    const updatedPosts = await getPosts(query || 'popular', 10, filterState);
    dispatch(setDataState(updatedPosts));
  };

  return (
    <Layout>
      <Head>
        <title>RedConnect</title>
      </Head>
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await getPosts(store.getState().search.searchQuery || 'AskReddit', 10, store.getState().filter.filterState);

  return {
    props: {
      posts,
    },
  };
}

export default Home;