import React, {useMemo} from 'react';
import Header from 'component/Header';

const Layout = props => {
  const user = useMemo(() => {
    const user = global.auth.getUser() || {}; return user; // 避免空值報錯
  }, []);
  return (
    <div className="main">
      <Header user={user} /> 
      {/* child component */} 
      {props.children}
    </div>
  );
};

export default Layout;