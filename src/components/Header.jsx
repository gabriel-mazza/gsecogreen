import React from "react";
import { NavLink } from "react-router-dom";
import { FiBell, FiUser } from "react-icons/fi"; 

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <NavLink to="/">
          <img
            src="/imagens/logo.png" 
            alt="Logo"
            className="h-20 cursor-pointer"
          />
        </NavLink>
      </div>

      <nav className="flex space-x-6 text-sm">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "text-gray-700 font-medium"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/relatorios"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "text-gray-700 font-medium"
          }
        >
          Relatórios
        </NavLink>
        <NavLink
          to="/eletronicos"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "text-gray-700 font-medium"
          }
        >
          Eletrônicos
        </NavLink>
        <NavLink
          to="/sobre"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-medium" : "text-gray-700 font-medium"
          }
        >
          Sobre
        </NavLink>
      </nav>

      <div className="flex items-center space-x-4">
        <FiBell className="text-gray-700 w-5 h-5 cursor-pointer" />
        <FiUser className="text-gray-700 w-5 h-5 cursor-pointer" />
      </div>
    </header>
  );
}
