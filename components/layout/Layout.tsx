import React, { ReactNode } from 'react';
import Header from "../header/Header";
import Content from '../content/Content';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <Content />
      {children}
    </div>
  );
};

export default Layout;
