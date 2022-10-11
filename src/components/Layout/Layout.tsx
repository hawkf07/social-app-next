import { FC, ReactNode } from "react";
import {Navbar} '../Navbar'
interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
