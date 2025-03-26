
import { useState } from "react";
import AgentOptions from "./AgentOptions";
import PredictiveModels from "./PredictiveModels";
import { cn } from "@/lib/utils";
import AgentChat from "./AgentChat";
import NewAgentChat from "./NewAgentChat";
import { useIsMobile } from "@/hooks/use-mobile";

type NavOption = "inicio" | "agentes" | "modelos" | "nuevo";

interface MainContentProps {
  activeNav: NavOption;
}

const MainContent = ({ activeNav }: MainContentProps) => {
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const isMobile = useIsMobile();

  const addMessage = (message: string) => {
    setChatHistory(prev => [...prev, message]);
  };

  return (
    <div className="flex flex-col h-full">
      <header className={cn("p-4 md:p-6 animate-fade-in", 
        isMobile && "pt-16" // Extra padding on mobile to account for the menu button
      )}>
        <h1 className={cn(
          "text-xl md:text-2xl lg:text-3xl font-bold text-center text-white mb-4",
          isMobile && "text-lg"
        )}>
          Agentes de Inteligencia Artificial personalizados para tu industria
        </h1>
      </header>

      <div className="flex-1 px-2 py-4 md:p-4 overflow-hidden">
        <div className={cn(
          "glass-card rounded-xl p-3 md:p-4 animate-fade-in",
          "transition-opacity duration-300 h-full flex flex-col"
        )}>
          {activeNav === "inicio" && (
            <div className="max-w-4xl mx-auto overflow-y-auto">
              <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 text-purple">Transformando la industria legal con IA</h2>
              <p className="text-gray-300 mb-6">
                Nuestros agentes de inteligencia artificial están diseñados para revolucionar el sector legal, 
                automatizando tareas complejas y proporcionando insights precisos que le permiten a tu equipo 
                enfocarse en lo que realmente importa.
              </p>
              
              <div className="flex justify-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3" 
                  alt="Legal Technology" 
                  className="rounded-lg shadow-lg max-h-72 object-cover"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="glass-card hover-card rounded-lg p-5">
                  <h3 className="text-lg font-medium text-purple mb-2">Análisis de documentos</h3>
                  <p className="text-gray-400">
                    Procesa contratos, acuerdos y documentos legales complejos en segundos, extrayendo 
                    información clave y detectando posibles riesgos automáticamente.
                  </p>
                </div>
                <div className="glass-card hover-card rounded-lg p-5">
                  <h3 className="text-lg font-medium text-purple mb-2">Asistencia inteligente</h3>
                  <p className="text-gray-400">
                    Obtén respuestas inmediatas basadas en la normativa vigente y jurisprudencia, 
                    con referencias precisas para respaldar cada recomendación.
                  </p>
                </div>
                <div className="glass-card hover-card rounded-lg p-5">
                  <h3 className="text-lg font-medium text-purple mb-2">Redacción automatizada</h3>
                  <p className="text-gray-400">
                    Genera borradores de documentos legales personalizados, desde contratos hasta 
                    demandas, adaptados a tus necesidades específicas.
                  </p>
                </div>
                <div className="glass-card hover-card rounded-lg p-5">
                  <h3 className="text-lg font-medium text-purple mb-2">Modelos predictivos</h3>
                  <p className="text-gray-400">
                    Anticipa resultados de litigios y evalúa estrategias legales basadas en datos 
                    históricos y tendencias actuales del sistema judicial.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeNav === "agentes" && (
            <div className="flex flex-col h-full overflow-hidden">
              <AgentOptions />
            </div>
          )}

          {activeNav === "modelos" && (
            <div className="flex flex-col h-full overflow-y-auto">
              <PredictiveModels />
            </div>
          )}

          {activeNav === "nuevo" && (
            <div className="flex flex-col h-full overflow-hidden">
              <NewAgentChat />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
