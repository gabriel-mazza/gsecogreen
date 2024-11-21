import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, ResponsiveContainer } from "recharts";

const Relatorios = () => {
  const [dailyData, setDailyData] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);
  const [classification, setClassification] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const response = await fetch("https://673bff0d96b8dcd5f3f82526.mockapi.io/api/v1/reports");
        const data = await response.json();

        const dailyReport = data.find((item) => item.type === "daily");
        const monthlyReport = data.find((item) => item.type === "monthly");
        const weeklyReport = data.find((item) => item.type === "weekly");

        setDailyData(dailyReport ? dailyReport.intervals : []);
        setMonthlyData(monthlyReport ? monthlyReport.months : []);
        setClassification(weeklyReport ? weeklyReport.days : []);
      } catch (error) {
        console.error("Error fetching reports:", error);
      }
    };

    fetchReports();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-gray-200 p-4 sm:p-6 rounded-lg flex-grow">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Relatórios</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          <div className="bg-white p-4 sm:p-6 rounded shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Consumo de Energia Diário</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="consumption" fill="#4caf50" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded shadow">
            <h2 className="text-lg sm:text-xl font-semibold mb-4">Consumo de Energia Mensal</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="consumption" stroke="#4caf50" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

 
      <div className="bg-green-700 p-4 sm:p-6 flex items-center justify-center">
        <div className="bg-white p-4 sm:p-6 rounded shadow w-full max-w-4xl">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center text-gray-800">
            Classificação do Consumo de Energia
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr>
                  <th className="border border-gray-300 p-2">Dia</th>
                  <th className="border border-gray-300 p-2">Classificação</th>
                </tr>
              </thead>
              <tbody>
                {classification.map((item) => (
                  <tr key={item.day}>
                    <td className="border border-gray-300 p-2">{item.day}</td>
                    <td
                      className={`border border-gray-300 p-2 text-white text-center ${
                        item.classification === "Alto"
                          ? "bg-red-500"
                          : item.classification === "Médio"
                          ? "bg-yellow-500"
                          : "bg-green-500"
                      }`}
                    >
                      {item.classification}
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

export default Relatorios;
