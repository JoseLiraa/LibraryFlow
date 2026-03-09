import { useLibros } from "../hooks/useLibros"
import LibroCard from "../components/LibroCard"
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

    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">
        Catálogo de Libros
      </h1>

      <div className="grid grid-cols-3 gap-4">

        {libros.map(libro => (

          <LibroCard
            key={libro.id}
            libro={libro}
            onReservar={handleReservar}
          />

        ))}

      </div>

    </div>

  )

}

export default LibrosPage