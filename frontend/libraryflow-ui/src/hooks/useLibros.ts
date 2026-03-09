import { useEffect, useState } from "react"
import { obtenerLibros } from "../services/libroService"
import { Libro } from "../interfaces/Libro"

export const useLibros = () => { 
  const [libros, setLibros] = useState<Libro[]>([])
  const [loading, setLoading] = useState(false)

  const cargarLibros = async () => {
    try {
      setLoading(true)
      const datos = await obtenerLibros()
      setLibros(datos)
    } catch (error) {
      console.error("Error al cargar libros:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cargarLibros()
  }, [])

  return { libros, loading, cargarLibros }
}