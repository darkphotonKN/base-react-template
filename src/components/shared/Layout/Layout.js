import React from 'react';
import Header from '../Header';

const Layout = ({ children }) => {
  // { children } // same as const children = props.children;, ES6 destructuring
  return (
    <div className="container">
      <Header />
      {children}
    </div>
  );
};

export default Layout;
