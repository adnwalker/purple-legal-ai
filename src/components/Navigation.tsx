
import { useState } from "react";
import FileUpload from "./FileUpload";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

type NavOption = "inicio" | "agentes" | "modelos" | "nuevo";

interface NavProps {
  activeOption?: NavOption;
  onNavigate: (option: NavOption) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const Navigation = ({ activeOption = "inicio", onNavigate, isOpen, onToggle }: NavProps) => {
  const isMobile = useIsMobile();

  const navItems = [
    { id: "inicio", label: "Inicio" },
    { id: "agentes", label: "Agentes" },
    { id: "modelos", label: "Modelos Predictivos" },
    { id: "nuevo", label: "Nuevo Agente" },
  ] as const;

  return (
    <>
      {/* Mobile menu button - fixed to top left */}
      {isMobile && (
        <button 
          onClick={onToggle}
          className="fixed top-4 left-4 z-50 p-2 bg-dark-light rounded-md border border-border"
        >
          {isOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
        </button>
      )}
    
      {/* Navigation sidebar */}
      <div 
        className={cn(
          "bg-dark-light border-r border-border h-screen transition-all duration-300 fixed top-0 left-0 z-40",
          isOpen ? "w-64" : "w-0 md:w-16",
          isMobile && !isOpen && "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <h1 className={cn("text-xl font-bold text-white truncate", !isOpen && "hidden")}>
              <span className="text-purple-light">IA</span> bogadi
            </h1>
            {!isMobile && (
              <button 
                onClick={onToggle}
                className="p-1 rounded-md hover:bg-white/10"
              >
                {isOpen ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                )}
              </button>
            )}
          </div>
          
          <nav className={cn("flex-grow p-3 space-y-1 overflow-y-auto", !isOpen && "px-2")}>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={cn(
                  "nav-item",
                  activeOption === item.id && "active",
                  !isOpen && "justify-center p-3"
                )}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {item.id === "inicio" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />}
                  {item.id === "agentes" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />}
                  {item.id === "modelos" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />}
                  {item.id === "nuevo" && <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />}
                </svg>
                {isOpen && <span>{item.label}</span>}
              </button>
            ))}
          </nav>
          
          <div className="mt-auto p-3">
            {isOpen ? <FileUpload isCollapsed={false} /> : <FileUpload isCollapsed={true} />}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
