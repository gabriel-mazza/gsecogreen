export default function Classification({ dados }) {
    if (!Array.isArray(dados)) {
      return <div>Dados não disponíveis</div>;
    }
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <ul>
          {dados.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-gray-600"
            >
              <span>{item.day}</span>
              <span
                className={`px-2 py-1 rounded-full text-white ${
                  item.consumption === "Alto"
                    ? "bg-red-500"
                    : item.consumption === "Médio"
                    ? "bg-yellow-500"
                    : "bg-green-500"
                }`}
              >
                {item.consumption}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  