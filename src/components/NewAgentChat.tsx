
import { useState } from "react";

const NewAgentChat = () => {
  const [prompt, setPrompt] = useState("");
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      const message = `Usuario: ${prompt}`;
      setChatHistory(prev => [...prev, message]);
      
      // Simulate AI response
      setTimeout(() => {
        const aiResponse = `Asistente: Estoy creando un nuevo agente personalizado basado en tu instrucción: "${prompt}". Este proceso puede tomar algunos minutos...`;
        setChatHistory(prev => [...prev, aiResponse]);
      }, 800);
      
      setPrompt("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-purple text-center">Crea tu agente personalizado</h2>
      <p className="text-gray-300 mb-6 text-center">
        Describe las características y funcionalidades que deseas para tu agente de IA personalizado.
      </p>
      
      <div className="glass-card rounded-lg p-6">
        <div className="mb-4 h-64 overflow-y-auto bg-dark-lighter rounded-lg p-4">
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
              <p>Describe el agente que deseas crear</p>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ejemplo: Un agente para análisis de contratos de arrendamiento..."
            className="flex-1 bg-dark-lighter text-white border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple/50 focus:border-purple/50"
          />
          <button
            type="submit"
            className="bg-purple hover:bg-purple-dark text-white px-4 py-2 rounded-lg transition-colors"
            disabled={!prompt.trim()}
          >
            Crear
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewAgentChat;
