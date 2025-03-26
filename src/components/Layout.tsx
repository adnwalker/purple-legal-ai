
import { ReactNode } from "react";
import Navigation from "./Navigation";
import MainContent from "./MainContent";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-dark overflow-hidden">
      <Navigation />
      <main className="flex-1 overflow-auto relative">
        <div className="absolute inset-0 animated-gradient opacity-40 z-0"></div>
        <div className="relative z-10 h-full">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
