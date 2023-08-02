import React from 'react';
import Header from "../header/Header";
import Content from '../content/Content';
import { LayoutProps } from '@/types/types';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className='bg-gray-300'>
      <Header />
      <Content/>
      {children}
    </div>
  );
};

export default Layout;