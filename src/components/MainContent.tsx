
import { useState } from "react";
import AgentOptions from "./AgentOptions";
import PredictiveModels from "./PredictiveModels";
import { cn } from "@/lib/utils";

type NavOption = "inicio" | "agentes" | "modelos" | "nuevo";

const MainContent = () => {
  const [activeNav, setActiveNav] = useState<NavOption>("inicio");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const addMessage = (message: string) => {
    setChatHistory(prev => [...prev, message]);
  };

  return (
    <div className="h-full flex flex-col">
      <header className="p-6 animate-fade-in">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-6">
          Agentes de Inteligencia Artificial personalizados para tu industria
        </h1>
      </header>

      <div className="flex-1 p-6 overflow-auto">
        <div className={cn(
          "glass-card rounded-xl p-6 animate-fade-in",
          "transition-opacity duration-300"
        )}>
          {activeNav === "inicio" && (
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4 text-purple">Transformando la industria legal con IA</h2>
              <p className="text-gray-300 mb-6">
                Nuestros agentes de inteligencia artificial están diseñados para revolucionar el sector legal, 
                automatizando tareas complejas y proporcionando insights precisos que le permiten a tu equipo 
                enfocarse en lo que realmente importa.
              </p>
              
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
            <AgentOptions chatHistory={chatHistory} onSendMessage={addMessage} />
          )}

          {activeNav === "modelos" && (
            <PredictiveModels />
          )}

          {activeNav === "nuevo" && (
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl font-semibold mb-4 text-purple">Crea tu agente personalizado</h2>
              <p className="text-gray-300 mb-6">
                Esta funcionalidad estará disponible próximamente. Podrás crear y personalizar agentes 
                de IA específicos para las necesidades únicas de tu empresa.
              </p>
              <div className="glass-card rounded-lg p-8 flex items-center justify-center">
                <svg className="w-16 h-16 text-purple animate-pulse-light" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
                <div className="ml-4 text-left">
                  <h3 className="text-xl font-medium text-white">Próximamente</h3>
                  <p className="text-gray-400">Estamos trabajando para traerte esta funcionalidad pronto</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
