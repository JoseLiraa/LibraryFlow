import { Libro } from "../interfaces/Libro"

interface LibroCardProps {
  libro: Libro
  onReservar: (idLibro: number) => void
}

const LibroCard = ({ libro, onReservar }: LibroCardProps) => {
  const { id, titulo, autor, stock } = libro
  const esAgotado = stock === 0

  //guardamos en variables los estilos
  const cardEstilos = `group relative bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 flex flex-col items-center text-center 
    ${esAgotado ? 'opacity-60 bg-gray-50/50' : 'hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1'}`

  const fondoCardEstilos = `w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors 
    ${esAgotado ? 'bg-gray-200' : 'bg-gray-100 group-hover:bg-indigo-50'}`

  const iconoEstilos = `w-10 h-10 
    ${esAgotado ? 'text-gray-400' : 'text-gray-400 group-hover:text-indigo-600'}`

  const tituloEstilos = `text-xl font-bold tracking-tight 
    ${esAgotado ? 'text-gray-500' : 'text-gray-900'}`

  const autorEstilos = `text-sm font-medium uppercase tracking-widest mb-4 
    ${esAgotado ? 'text-gray-400' : 'text-indigo-600'}`
  
  const stockEstilos = `inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 border 
    ${esAgotado ? 'bg-gray-100 text-gray-400 border-transparent' : 'text-gray-500 border-gray-100'}` 

  const btnEstilos = `w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 
    ${esAgotado ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#1a1a1a] text-white hover:bg-black active:scale-95'}`

  return (
    <div className={cardEstilos}>
      {/* Icono*/}
      <div className={fondoCardEstilos}>
        <svg className={iconoEstilos} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      </div>

      {/* Titulo, autor y stock*/}
      <div className="flex-1">
        <h3 className={tituloEstilos}>{titulo}</h3>
        <p className={autorEstilos}>{autor}</p>
        
        <span className={stockEstilos}>
          {esAgotado ? 'Agotado' : `Stock: ${stock} unidades`}
        </span>
      </div>

      <button disabled={esAgotado} onClick={() => onReservar(id)} className={btnEstilos}>
        {esAgotado ? 'No disponible' : 'Reservar'}
      </button>
    </div>
  )
}

export default LibroCard