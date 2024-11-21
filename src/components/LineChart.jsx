import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

export default function LineChart({ dados }) {
  const chartData = {
    labels: dados.map(item => item.month), // Meses (substitua conforme seus dados)
    datasets: [
      {
        label: 'Consumo Mensal (kWh)',
        data: dados.map(item => item.consumption), // Consumo mensal (substitua conforme seus dados)
        borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
        backgroundColor: 'rgba(75, 192, 192, 0.2)', // Cor de fundo da linha
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <Line data={chartData} options={{
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Consumo de Energia Mensal',
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
