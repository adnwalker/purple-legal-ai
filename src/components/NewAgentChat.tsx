
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

const NewAgentChat = () => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);
  const [predefinedPrompt, setPredefinedPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      const message = `Usuario: ${prompt}`;
      setChatHistory(prev => [...prev, message]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = `Nuevo Agente: Procesando su solicitud "${prompt}". Estoy aprendiendo de sus instrucciones para crear un nuevo agente personalizado.`;
        setChatHistory(prev => [...prev, aiResponse]);
      }, 800);
      
      setPrompt("");
    }
  };

  const handlePredefinedPrompt = () => {
    if (predefinedPrompt.trim()) {
      const message = `Usuario (predefinido): ${predefinedPrompt}`;
      setChatHistory(prev => [...prev, message]);
      
      // Simulate AI response for predefined prompt
      setTimeout(() => {
        const aiResponse = `Nuevo Agente: Procesando su instrucción predefinida "${predefinedPrompt}". Esta será la base para crear su nuevo agente personalizado.`;
        setChatHistory(prev => [...prev, aiResponse]);
      }, 800);
      
      setPredefinedPrompt("");
    }
  };
  
  return (
    <div className="flex flex-col h-full max-h-full overflow-hidden">
      <h2 className="text-xl font-semibold mb-3 text-center text-purple">Crear un Nuevo Agente</h2>
      
      <p className="text-gray-300 mb-3 text-center text-sm">
        Define las capacidades y conocimientos específicos para tu nuevo agente de IA personalizado.
      </p>
      
      {/* Predefined prompt section */}
      <div className="mb-3 px-1">
        <div className="flex gap-2 items-center bg-white/5 p-2 rounded-lg border border-white/10">
          <Input
            type="text"
            value={predefinedPrompt}
            onChange={(e) => setPredefinedPrompt(e.target.value)}
            placeholder="Define las capacidades básicas de tu agente..."
            className="flex-1 border-0 bg-transparent text-white focus-visible:ring-1 focus-visible:ring-purple/50 focus-visible:ring-offset-0"
          />
          <Button 
            onClick={handlePredefinedPrompt}
            variant="outline"
            className="bg-transparent border border-white/20 hover:bg-white/10 text-white whitespace-nowrap"
          >
            <Send size={18} />
            <span className="ml-2 hidden sm:inline">Definir</span>
          </Button>
        </div>
      </div>
      
      {/* Chat history */}
      <div className="flex-1 mb-3 overflow-y-auto bg-dark-lighter rounded-lg p-3 min-h-0">
        {chatHistory.length > 0 ? (
          <div className="space-y-3">
            {chatHistory.map((message, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-lg ${
                  message.startsWith("Usuario") 
                    ? "bg-dark-light ml-4 animate-fade-in" 
                    : "bg-purple/20 mr-4 animate-fade-in-right"
                }`}
              >
                {message}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            <p>Define tu nuevo agente para comenzar</p>
          </div>
        )}
      </div>
      
      {/* User input */}
      <form onSubmit={handleSubmit} className="flex gap-2 mt-auto">
        <Input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Proporciona más detalles sobre tu agente..."
          className="flex-1 bg-dark-lighter text-white border border-border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-purple/50 focus:border-purple/50"
        />
        <Button
          type="submit"
          className="bg-purple hover:bg-purple-dark text-white px-3 sm:px-6 py-2 h-10 rounded-lg transition-colors whitespace-nowrap"
          disabled={!prompt.trim()}
        >
          <Send size={18} className="sm:mr-2" />
          <span className="hidden sm:inline">Enviar</span>
        </Button>
      </form>
    </div>
  );
};

export default NewAgentChat;
