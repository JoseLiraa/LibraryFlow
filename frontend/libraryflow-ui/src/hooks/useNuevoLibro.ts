import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { guardarLibro } from "../services/libroService";
import { CrearLibroDto } from "../interfaces/Libro";
import { toast } from 'sonner'


export const useNuevoLibro = () => {
  const navegar = useNavigate();
  const [procesando, setProcesando] = useState(false);
  
  const [formulario, setFormulario] = useState<CrearLibroDto>({
    titulo: "",
    autor: "",
    stock: 1
  });

  const manejarCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormulario(prev => ({
      ...prev,
      [name]: name === "stock" ? Number(value) : value
    }));
  };

  const manejarEnvio = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formulario.titulo || !formulario.autor) return;

    setProcesando(true);
    try {
      await guardarLibro(formulario);
      toast.success("Libro guardado exitosamente!")

      navegar("/");
    } catch (error) {
      console.error("Error al crear libro:", error);
      toast.error("Hubo un problema al registrar el libro.")
    } finally {
      setProcesando(false);
    }
  };

  return {
    formulario,
    procesando,
    manejarCambio,
    manejarEnvio,
    navegar
  };
};