
import { useState } from "react";
import { cn } from "@/lib/utils";

const models = [
  {
    id: "compliance",
    name: "Análisis de Compliance",
    description: "Evalúa el nivel de cumplimiento normativo en documentos legales",
    icon: "⚖️"
  },
  {
    id: "risk",
    name: "Evaluación de Riesgos",
    description: "Identifica posibles riesgos legales en contratos y acuerdos",
    icon: "🛡️"
  },
  {
    id: "litigation",
    name: "Predicción de Litigios",
    description: "Evalúa probabilidades de éxito en distintos escenarios de litigio",
    icon: "📊"
  },
  {
    id: "contract",
    name: "Análisis Contractual",
    description: "Detecta inconsistencias y cláusulas problemáticas en contratos",
    icon: "📝"
  },
  {
    id: "regulatory",
    name: "Cambios Regulatorios",
    description: "Predice el impacto de nuevas regulaciones en tu operación",
    icon: "📈"
  },
  {
    id: "custom",
    name: "Modelo Personalizado",
    description: "Crea un modelo predictivo adaptado a tus necesidades específicas",
    icon: "🔧"
  }
];

const PredictiveModels = () => {
  const [selectedModel, setSelectedModel] = useState<string | null>(null);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-purple">Modelos Predictivos</h2>
      <p className="text-gray-300 mb-8">
        Nuestros modelos de inteligencia artificial predictiva te permiten anticipar 
        resultados y tomar decisiones informadas basadas en datos históricos y patrones legales.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {models.map((model) => (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={cn(
              "glass-card hover-card rounded-lg p-5 flex flex-col items-center text-center transition-all duration-300",
              selectedModel === model.id ? "border-purple bg-purple/10" : ""
            )}
          >
            <div className="w-12 h-12 flex items-center justify-center text-2xl mb-3 bg-dark-lighter rounded-full">
              {model.icon}
            </div>
            <h3 className="text-lg font-medium text-white mb-2">{model.name}</h3>
            <p className="text-sm text-gray-400">{model.description}</p>
            <div className={cn(
              "mt-4 text-xs py-1 px-3 rounded-full transition-opacity duration-300",
              selectedModel === model.id ? "bg-purple/30 text-white opacity-100" : "opacity-0"
            )}>
              Seleccionado
            </div>
          </button>
        ))}
      </div>
      
      {selectedModel && (
        <div className="mt-8 glass-card rounded-lg p-6 animate-fade-in">
          <h3 className="text-xl font-medium text-white mb-4">
            Modelo: {models.find(m => m.id === selectedModel)?.name}
          </h3>
          <p className="text-gray-300 mb-4">
            Este modelo está actualmente en fase de implementación. Pronto podrás utilizar 
            esta función para obtener predicciones detalladas y análisis avanzados.
          </p>
          <div className="flex justify-center mt-6">
            <button className="bg-dark-lighter hover:bg-white/10 text-white px-6 py-2 rounded-lg transition-colors">
              Solicitar acceso anticipado
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PredictiveModels;
