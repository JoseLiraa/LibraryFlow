import { useReservaciones } from "../hooks/useReservaciones"
import { LibroIcon } from "../components/LibroCard/LibroIcon"

const ReservacionesPage = () => {
 
  const { reservaciones, loading } = useReservaciones()
  
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 font-sans">
      <header className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Reservaciones
        </h1>
        <p className="text-gray-500 mt-2 font-medium">
          Listado detallado de reservaciones hechas.
        </p>
      </header>

      {loading ? (
        <div className="flex justify-center py-20 text-gray-400 font-medium">
          Cargando registros...
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {reservaciones.map((reservacion) => (
            <div 
              key={reservacion.id} 
              className="bg-white border border-gray-100 p-6 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all group"
            >
              <div className="flex items-center gap-4">
                
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-white transition-transform group-hover:scale-110">
                  <LibroIcon className="w-6 h-6 text-white" />
                </div>
                
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{reservacion.nombreUsuario}</h3>
                  <p className="text-sm text-gray-500">
                    Libro: <span className="text-indigo-600 font-semibold">{reservacion.tituloLibro}</span>
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-0 flex flex-col sm:items-end border-t sm:border-t-0 border-gray-50 pt-4 sm:pt-0">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Fecha y Hora Reserva 
                </span>
                <span className="text-sm font-bold text-gray-900 bg-indigo-50/50 text-indigo-700 px-3 py-1 rounded-lg">
                 {new Date(reservacion.fechaReservacion).toLocaleDateString()} 
                 | {new Date(reservacion.fechaReservacion).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                 </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReservacionesPage