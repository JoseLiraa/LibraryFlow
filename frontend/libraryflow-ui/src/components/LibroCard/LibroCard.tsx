import { Libro } from "../../interfaces/Libro"
import { LibroIcon } from "./LibroIcon"
import { getLibroStyles } from "./LibroCard.styles"

interface LibroCardProps {
  libro: Libro
  onReservar: (idLibro: number) => void
}

const LibroCard = ({ libro, onReservar }: LibroCardProps) => {
  const esAgotado = libro.stock === 0;
  const estilos = getLibroStyles(esAgotado);

  return (
    <div className={estilos.card}>
      {/* Icono*/}
      <div className={estilos.contenedorIcono}>
        <LibroIcon className={estilos.icono} />
      </div>

      {/* Titulo, autor y stock*/}
      <div className="flex-1">
        <h3 className={estilos.titulo}>{libro.titulo}</h3>
        <p className={estilos.autor}>{libro.autor}</p>
        
        <span className={estilos.stock}>
          {esAgotado ? 'Agotado' : `Stock: ${libro.stock} unidades`}
        </span>
      </div>

      <button 
        disabled={esAgotado} 
        onClick={() => onReservar(libro.id)} 
        className={estilos.boton}
      >
        {esAgotado ? 'No disponible' : 'Reservar'}
      </button>
    </div>
  )
}

export default LibroCard