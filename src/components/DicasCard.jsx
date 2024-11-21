import React, { useState, useEffect } from "react";

const DicasCard = () => {
  const dicas = [
    "Muitos aparelhos continuam consumindo energia no modo stand-by. Desligá-los da tomada pode fazer uma grande diferença.",
    "Utilize equipamentos como máquina de lavar e aquecedores de água em horários de menor demanda, quando as tarifas são mais baixas",
    "Deixe as cortinas abertas durante o dia para reduzir o uso de luz artificial. Troque também lâmpadas incandescentes por LED para uma iluminação mais eficiente",
    "Manter os filtros de ar-condicionado e aquecedores limpos melhora o desempenho dos aparelhos e reduz o consumo de energia",
    "Configurar esses aparelhos para temperaturas otimizadas (entre 2-4°C para geladeiras e 23-24°C para o ar-condicionado) evita o consumo excessivo e mantém o ambiente confortável",
  ];

  const [dicaAtual, setDicaAtual] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDicaAtual((prevDica) => (prevDica + 1) % dicas.length);
    }, 6000); 
    return () => clearInterval(interval);
  }, [dicas.length]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="border-4 border-green-700 rounded-lg overflow-hidden shadow-lg">
        <div className="bg-gray-100 p-6 text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Dicas de economia</h2>
          <div className="text-gray-700 p-4 bg-white rounded-lg shadow-md">
            <p>{dicas[dicaAtual]}</p>
          </div>

          
          <div className="flex justify-center gap-2 mt-4">
            {dicas.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-1 rounded-full ${
                  index === dicaAtual ? "bg-gray-600" : "bg-gray-400"
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DicasCard;