
import { useState } from "react";
import Layout from "@/components/Layout";
import Navigation from "@/components/Navigation";
import MainContent from "@/components/MainContent";

type NavOption = "inicio" | "agentes" | "modelos" | "nuevo";

const Index = () => {
  const [activeNav, setActiveNav] = useState<NavOption>("inicio");

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-dark overflow-hidden">
      <Navigation activeOption={activeNav} onNavigate={setActiveNav} />
      <main className="flex-1 overflow-auto relative">
        <div className="absolute inset-0 animated-gradient opacity-40 z-0"></div>
        <div className="relative z-10 h-full">
          <MainContent />
        </div>
      </main>
    </div>
  );
};

export default Index;
