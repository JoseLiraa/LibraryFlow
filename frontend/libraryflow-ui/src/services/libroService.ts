import clienteAxios from '../api/clienteAxios';
import { Libro, CrearLibroDto } from '../interfaces/Libro';

export const obtenerLibros = async (): Promise<Libro[]> => {
  const respuesta = await clienteAxios.get<Libro[]>("/books"); //peticion GET obtiene lista de libros
  return respuesta.data;
};

export const guardarLibro = async (datos: CrearLibroDto): Promise<Libro> => {
  const respuesta = await clienteAxios.post<Libro>("/books", datos);
  return respuesta.data;
};