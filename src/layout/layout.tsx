import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="z-10 text-golden">
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
