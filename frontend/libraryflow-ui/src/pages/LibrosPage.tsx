import { useLibros } from "../hooks/useLibros"
import LibroCard from "../components/LibroCard/LibroCard"
import { crearReservacion } from "../services/reservacionService"

const LibrosPage = () => {

  const { libros, cargarLibros } = useLibros()

  const handleReservar = async (libroId: number) => {
    const nombreUsuario = prompt("Ingrese su nombre")
    if (!nombreUsuario) return
    
    try {
      await crearReservacion({
        idLibro: libroId, 
        nombreUsuario: nombreUsuario
      })
      await cargarLibros()
      alert("Reserva realizada")
    } catch {
      alert("No hay stock disponible")
    }
  }

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <header className="mb-12 border-b border-gray-100 pb-8">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Catálogo de Libros
          </h1>
          <p className="text-gray-500 text-lg">
            Explora nuestra colección y gestiona tus reservas al instante.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {libros.map(libro => (
            <LibroCard
              key={libro.id}
              libro={libro}
              onReservar={handleReservar}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LibrosPage