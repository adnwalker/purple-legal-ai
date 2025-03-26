
import { ReactNode, useState } from "react";
import Navigation from "./Navigation";
import MainContent from "./MainContent";
import { useIsMobile } from "@/hooks/use-mobile";

type NavOption = "inicio" | "agentes" | "modelos" | "nuevo";

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [activeNav, setActiveNav] = useState<NavOption>("inicio");
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-dark overflow-hidden">
      <Navigation activeOption={activeNav} onNavigate={setActiveNav} />
      <main className="flex-1 overflow-auto relative h-screen">
        <div className="absolute inset-0 animated-gradient opacity-40 z-0"></div>
        <div className="relative z-10 h-full">
          <MainContent activeNav={activeNav} />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
