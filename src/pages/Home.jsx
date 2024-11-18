import React from "react";
import DicasCard from "../components/DicasCard";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <section className="bg-green-700 text-white flex flex-col md:flex-row items-center justify-around px-8 py-12 w-full">
        <div className="flex items-center gap-8 w-full md:w-1/2">
          <div>
            <img
              src="./imagens/lampada.png"
              alt="Lâmpada ecológica"
              className="w-72 h-72 max-w-full object-contain"
            />
          </div>

          <div className="text-left">
            <h1 className="text-4xl font-bold leading-tight">
              Energia
              <br />
              Consciente
              <br />
              Organizada
            </h1>
          </div>
        </div>

        <div className="bg-green-500 p-10 rounded-full text-center md:text-left flex items-center justify-center w-full md:w-1/2 h-auto md:h-80">
          <p className="text-lg"> 
            Nosso aplicativo ajuda você a monitorar e gerenciar o consumo de seus eletrodomésticos,
            proporcionando um controle eficiente e inteligente da sua energia. Com insights claros e
            funcionalidades fáceis de usar, você reduz gastos e adota hábitos mais sustentáveis,
            contribuindo para um futuro mais verde.
          </p>
        </div>
      </section>

    
      <div className="bg-white py-16 mt-8">
        <DicasCard />
      </div>
    </div>
  );
};

export default Home;
