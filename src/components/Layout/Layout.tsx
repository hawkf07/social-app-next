import { FC, ReactNode } from "react";
import { Navbar } from "../Navbar";
interface LayoutType {
  children: ReactNode;
}

const Layout: FC<LayoutType> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="p-3">{children}</div>
    </div>
  );
};

export { Layout };
