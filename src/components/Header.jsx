import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiBell, FiUser } from "react-icons/fi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

      <nav className="hidden md:flex space-x-6 text-sm">
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

      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full bg-white shadow-lg z-10 p-4 transition-all duration-300 ease-in-out">
          <div className="flex justify-end mb-4">
            <button onClick={() => setIsMenuOpen(false)} className="text-gray-700">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="space-y-6"> 
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
        </div>
      )}
    </header>
  );
}
