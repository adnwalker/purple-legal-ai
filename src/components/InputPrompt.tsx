
import { useState } from "react";

interface InputPromptProps {
  agentType: string;
  chatHistory: string[];
  onSendMessage: (message: string) => void;
}

const InputPrompt = ({ agentType, chatHistory, onSendMessage }: InputPromptProps) => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      const message = `Usuario: ${prompt}`;
      onSendMessage(message);
      
      // Simulate AI response with different styles based on agent type
      setTimeout(() => {
        let aiResponse = "";
        
        switch (agentType) {
          case "analizar":
            aiResponse = `Analizando documentos: He identificado 3 cláusulas relevantes en el contrato relacionadas con su consulta sobre "${prompt}"`;
            break;
          case "sensus":
            aiResponse = `Cooper Sensus: Según la normativa colombiana vigente (Ley 1564 de 2012, Art. 82), respecto a "${prompt}", se establece que...`;
            break;
          case "lex":
            aiResponse = `Cooper Lex: He redactado un borrador de documento legal basado en su instrucción "${prompt}"`;
            break;
          case "praxis":
            aiResponse = `Cooper Praxis: Simulando el escenario legal donde "${prompt}". Los posibles resultados serían...`;
            break;
          default:
            aiResponse = `Agente: Procesando su solicitud "${prompt}"`;
        }
        
        onSendMessage(aiResponse);
      }, 800);
      
      setPrompt("");
    }
  };

  return (
    <div className="flex flex-col">
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
            <p>Ingresa una consulta para comenzar</p>
          </div>
        )}
      </div>
      
      <form onSubmit={handleSubmit} className="flex gap-2 mt-2">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Escribe tu consulta aquí..."
          className="flex-1 bg-dark-lighter text-white border border-border rounded-lg px-4 py-2 focus:outline-none focus:ring-1 focus:ring-purple/50 focus:border-purple/50"
        />
        <button
          type="submit"
          className="bg-purple hover:bg-purple-dark text-white px-4 py-2 rounded-lg transition-colors"
          disabled={!prompt.trim()}
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default InputPrompt;
