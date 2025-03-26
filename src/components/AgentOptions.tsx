
import { useState } from "react";
import InputPrompt from "./InputPrompt";
import { cn } from "@/lib/utils";

type AgentType = "analizar" | "sensus" | "lex" | "praxis";

interface AgentOptionsProps {
  chatHistory: string[];
  onSendMessage: (message: string) => void;
}

const AgentOptions = ({ chatHistory, onSendMessage }: AgentOptionsProps) => {
  const [activeAgent, setActiveAgent] = useState<AgentType>("analizar");
  
  const agents = [
    {
      id: "analizar",
      name: "Analizar Documentos",
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
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {agents.map((agent) => (
          <button
            key={agent.id}
            onClick={() => setActiveAgent(agent.id)}
            className={cn(
              "glass-card rounded-lg p-4 text-left transition-all duration-200",
              activeAgent === agent.id 
                ? "border-purple bg-purple/10" 
                : "hover:bg-white/10 hover:border-white/20"
            )}
          >
            <h3 className={cn(
              "text-lg font-medium mb-2 transition-colors",
              activeAgent === agent.id ? "text-purple" : "text-white"
            )}>
              {agent.name}
            </h3>
            <p className="text-sm text-gray-400">{agent.description}</p>
          </button>
        ))}
      </div>

      <div className="glass-card rounded-lg p-5 animate-fade-in">
        <div className="flex items-center mb-4">
          <div className={cn(
            "w-3 h-3 rounded-full mr-2",
            activeAgent === "analizar" && "bg-blue-400",
            activeAgent === "sensus" && "bg-green-400",
            activeAgent === "lex" && "bg-yellow-400",
            activeAgent === "praxis" && "bg-red-400"
          )}></div>
          <h3 className="text-lg font-medium text-white">
            {agents.find(a => a.id === activeAgent)?.name || "Agente"}
          </h3>
        </div>
        
        <InputPrompt 
          agentType={activeAgent} 
          chatHistory={chatHistory}
          onSendMessage={onSendMessage}
        />
      </div>
    </div>
  );
};

export default AgentOptions;
