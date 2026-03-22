import React from 'react';
interface Props { children: React.ReactNode; }
const MainLayout: React.FC<Props> = ({ children }) => (
  <div className="MainLayout">
    <header className="MainLayout-Header">DUA Streamliner</header>
    <main className="MainLayout-Content">{children}</main>
  </div>
);
export default MainLayout;
