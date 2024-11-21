import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-white hover:text-gray-400 text-2xl" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-white hover:text-gray-400 text-2xl" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-white hover:text-gray-400 text-2xl" />
          </a>
        </div>


        <div className="flex flex-col items-center md:items-start space-y-2 md:space-y-0 md:flex-row md:space-x-6">
          <div className="text-center md:text-left">
            <p>suporte@eletrogreen.com</p>
            <p>(00) 00000-0000</p>
          </div>
          <div className="flex justify-center">
            <img src="./imagens/logo.png" alt="Logo Eletrogreen" className="h-20" />
          </div>
        </div>
      </div>

      <div className="text-center mt-4 text-sm border-t border-gray-700 pt-4">
        © 2024 Eletrogreen. Todos os direitos reservados. Este site e seu conteúdo são protegidos por leis de direitos autorais.
      </div>
    </footer>
  );
}
