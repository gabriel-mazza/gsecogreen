import React from "react";

const Sobre = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section
        className="h-96 bg-cover bg-center flex items-center justify-center w-full"
        style={{
          backgroundImage: `url('./imagens/fundosobre.png')`, 
        }}
      >
        <div className="text-center max-w-4xl bg-white/80 p-6 rounded-md shadow-lg">
          <h1 className="text-3xl md:text-4xl font-bold text-green-700">
            Nosso aplicativo de Gestão de Energia
          </h1>
          <p className="mt-4 text-gray-700 text-sm md:text-base">
            Desenvolvido com o objetivo de ajudar usuários a monitorar, controlar e otimizar o
            consumo de energia dos seus eletrodomésticos.
          </p>
        </div>
      </section>

      <section className="bg-green-700 text-white px-6 md:px-8 py-12 w-full">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm md:text-lg leading-relaxed">
            O aplicativo oferece recursos como alertas de consumo excessivo, relatórios detalhados
            com gráficos diários e mensais, e sugestões personalizadas para uma melhor gestão do seu
            uso de energia. Com uma interface intuitiva e relatórios de fácil compreensão, os
            usuários podem monitorar a eficiência de seus dispositivos ao longo do tempo e ajustar
            seu uso de acordo com suas metas de economia.
          </p>

          <p className="mt-6 text-sm md:text-lg leading-relaxed">
            Além disso, nossa plataforma promove um consumo mais consciente, incentivando práticas
            que ajudam a prolongar a vida útil dos eletrodomésticos e reduzir o impacto ambiental.
            Explore nosso aplicativo e descubra como é fácil fazer parte desse movimento de
            economia inteligente de energia.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
