
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(!isMobile);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-row bg-dark overflow-hidden relative">
      <Navigation 
        activeOption={activeNav} 
        onNavigate={setActiveNav} 
        isOpen={isSidebarOpen}
        onToggle={toggleSidebar}
      />
      <main className={`flex-1 h-screen overflow-hidden transition-all duration-300 ${isSidebarOpen ? 'md:ml-64' : 'md:ml-16'}`}>
        <div className="absolute inset-0 animated-gradient opacity-40 z-0"></div>
        <div className="relative z-10 h-full overflow-auto">
          <MainContent activeNav={activeNav} />
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
