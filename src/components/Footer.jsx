import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4">
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

        <div className="flex items-center space-x-4">
          <div className="text-left">
            <p>suporte@eletrogreen.com</p>
            <p>(00) 00000-0000</p>
          </div>
          <div className="flex items-center">
            <img src="./public/imagens/logo.png" alt="Logo Eletrogreen" className="h-20" />
          </div>
        </div>
      </div>

  
      <div className="text-center mt-4 text-sm border-t border-gray-700 pt-4">
        © 2024 Eletrogreen. Todos os direitos reservados. Este site e seu conteúdo são protegidos por leis de direitos autorais.
      </div>
    </footer>
  );
}
