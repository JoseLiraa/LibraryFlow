import { useState } from "react"
import { useLibros } from "../hooks/useLibros"
import LibroCard from "../components/LibroCard/LibroCard"
import { ReservarModal } from "../components/modals/ReservarModal"
import { crearReservacion } from "../services/reservacionService"
import { Libro } from "../interfaces/Libro"

const LibrosPage = () => {
  const { libros, cargarLibros } = useLibros()
  
  const [libroSeleccionado, setLibroSeleccionado] = useState<Libro | null>(null)
  const [procesando, setProcesando] = useState(false)

  const manejarReserva = async (nombreUsuario: string) => {
    if (!libroSeleccionado) return
    
    setProcesando(true)
    try {
      await crearReservacion({
        idLibro: libroSeleccionado.id, 
        nombreUsuario: nombreUsuario
      })
      await cargarLibros()
      setLibroSeleccionado(null) 
    } catch {
      alert("Error: No se pudo realizar la reserva. Verifique disponibilidad.")
    } finally {
      setProcesando(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a] font-sans">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        <header className="mb-12 border-b border-gray-100 pb-8 text-center sm:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2">
            Catálogo de Libros
          </h1>
          <p className="text-gray-500 text-lg font-medium">
            Explora nuestra colección y gestiona tus reservas al instante.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {libros.map(libro => (
            <LibroCard
              key={libro.id}
              libro={libro}
              onReservar={() => setLibroSeleccionado(libro)}
            />
          ))}
        </div>
      </div>

      <ReservarModal 
        key={libroSeleccionado?.id || 'modal-cerrado'}
        estaAbierto={!!libroSeleccionado}
        libroTitulo={libroSeleccionado?.titulo || ""}
        alCerrar={() => setLibroSeleccionado(null)}
        alConfirmar={manejarReserva}
        Enviando={procesando} 
      />
    </div>
  )
}

export default LibrosPage