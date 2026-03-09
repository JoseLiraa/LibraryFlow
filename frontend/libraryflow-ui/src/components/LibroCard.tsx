import { Libro } from "../interfaces/Libro"

interface LibroCardProps {
  libro: Libro
  onReservar: (idLibro: number) => void
}

const LibroCard = ({ libro, onReservar }: LibroCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      
      <h2 className="text-lg font-bold text-gray-800">
        {libro.titulo}
      </h2>

      <p className="text-gray-600">
        Autor: {libro.autor}
      </p>

      <p className="text-gray-600 mb-3">
        Stock: {libro.stock}
      </p>

      <button
        onClick={() => onReservar(libro.id)}
        disabled={libro.stock === 0}
        className={`w-full py-2 rounded-lg text-white font-medium
          ${libro.stock === 0
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"}
        `}
      >
        Reservar
      </button>

    </div>
  )
}

export default LibroCard