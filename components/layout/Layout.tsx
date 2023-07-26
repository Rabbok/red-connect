import React from 'react';
import Header from "../header/Header";
import Content from '../content/Content';
import { Provider } from 'react-redux';
import { LayoutProps } from '@/types/types';
import store from "../store/store";

const Layout: React.FC<LayoutProps> = ({ children, posts }) => {
  return (
    <Provider store={store}>
      <div className='bg-gray-300'>
        <Header />
        <Content posts={posts} />
        {children}
      </div>
    </Provider>
  );
};

export default Layout;