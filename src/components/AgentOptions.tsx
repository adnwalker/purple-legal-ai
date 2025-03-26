
import { useState } from "react";
import { cn } from "@/lib/utils";
import AgentChat from "./AgentChat";

type AgentType = "analizar" | "sensus" | "lex" | "praxis";

const AgentOptions = () => {
  const [activeAgent, setActiveAgent] = useState<AgentType>("analizar");
  
  const agents = [
    {
      id: "analizar",
      name: "Análisis",
      description: "Análisis detallado de los documentos cargados."
    },
    {
      id: "sensus",
      name: "Cooper Sensus",
      description: "Investigación profunda de tus documentos con referencias externas (páginas web) y normativa colombiana."
    },
    {
      id: "lex",
      name: "Cooper Lex",
      description: "Redacta documentos legales con inteligencia artificial."
    },
    {
      id: "praxis",
      name: "Cooper Praxis",
      description: "Simula un escenario legal."
    },
  ] as const;

  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-wrap gap-3 justify-center mb-4">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() => setActiveAgent(agent.id)}
            className={cn(
              "px-4 py-2 rounded-md transition-all duration-200",
              activeAgent === agent.id 
                ? "bg-purple/20 text-white border-b-2 border-purple" 
                : "hover:bg-white/5 text-gray-300"
            )}
          >
            {agent.name}
          </button>
        ))}
      </div>

      <div className="glass-card rounded-lg p-5 flex-1 animate-fade-in">
        <div className="mb-4">
          <p className="text-gray-300 text-center">
            {agents.find(a => a.id === activeAgent)?.description}
          </p>
        </div>
        
        <AgentChat agentType={activeAgent} />
      </div>
    </div>
  );
};

export default AgentOptions;
