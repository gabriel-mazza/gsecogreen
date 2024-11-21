import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ dados }) {
  const chartData = {
    labels: dados.map(item => item.date), // As datas (ou qualquer campo que represente o tempo)
    datasets: [
      {
        label: 'Consumo Diário (kWh)',
        data: dados.map(item => item.consumption), // Consumo diário (substitua conforme seus dados)
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Cor das barras
        borderColor: 'rgba(75, 192, 192, 1)', // Cor da borda das barras
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Bar data={chartData} options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Consumo de Energia Diário',
          },
          tooltip: {
            callbacks: {
              label: function(tooltipItem) {
                return `${tooltipItem.raw} kWh`; // Exibir valor com unidade kWh
              },
            },
          },
        },
      }} />
    </div>
  );
}
