import React from 'react';
import Header from 'component/Header';

const Layout = props => (
  <div className="mamin">
    <Header />
    {/* 使用 props.children 獲取實際要渲染的元件*/}
    {props.children}
  </div>
)

export default Layout;