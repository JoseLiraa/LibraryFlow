import { useEffect, useState } from "react"
import { obtenerReservaciones } from "../services/reservacionService"
import { Reservacion } from "../interfaces/Reservacion"

export const useReservaciones = () => {
  const [reservaciones, setReservaciones] = useState<Reservacion[]>([])
  const [loading, setLoading] = useState(false)

  const cargarReservaciones = async () => {
    try {
      setLoading(true)
      const data = await obtenerReservaciones()
      setReservaciones(data)
    } catch (error) {
      console.error("Error al cargar reservaciones:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargarReservaciones()
  }, [])

  return { reservaciones, loading, cargarReservaciones }
}