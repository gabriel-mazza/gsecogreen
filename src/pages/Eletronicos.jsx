import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from "recharts";

const Eletronicos = () => {
  const [devicesData, setDevicesData] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(
          "https://673bff0d96b8dcd5f3f82526.mockapi.io/api/v1/devices"
        );
        const data = await response.json();
        setDevicesData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchDevices();
  }, []);

  const getColor = (index) => {
    const colors = ["#4caf50", "#388e3c", "#2e7d32", "#1b5e20", "#388e3c", "#66bb6a"];
    return colors[index % colors.length];
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-green-700 flex-grow p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-white">
          Relatórios de Eletrônicos
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Participação no Consumo Total
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={devicesData}
                  dataKey="total_consumption"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  innerRadius={50}
                  fill="#82ca9d"
                  label
                >
                  {devicesData.map((_, index) => (
                    <Cell key={index} fill={getColor(index)} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">
              Consumo Diário (kWh)
            </h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={devicesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="daily_consumption" fill="#4caf50" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>


      <div className="bg-gray-200 p-4 sm:p-6 flex items-center justify-center">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md w-full max-w-4xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800">
            Classificação do Consumo de Energia
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Eletrodoméstico</th>
                  <th className="border border-gray-300 p-2">Classificação</th>
                </tr>
              </thead>
              <tbody>
                {devicesData.map((device) => (
                  <tr key={device.id}>
                    <td className="border border-gray-300 p-2">{device.name}</td>
                    <td
                      className={`border border-gray-300 p-2 text-white text-center ${
                        device.classification === "alto"
                          ? "bg-red-500"
                          : device.classification === "médio"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {device.classification.charAt(0).toUpperCase() +
                        device.classification.slice(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eletronicos;
