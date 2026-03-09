import clienteAxios from '../api/clienteAxios';

export const obtenerLibros = async () => {
  const respuesta = await clienteAxios.get("/books"); //peticion GET obtiene lista de libros
  return respuesta.data;
};

export const crearReservacion = async (bookId, userName) => {
  const respuesta = await clienteAxios.post("/reservations", {
    bookId,
    userName
  });

  return respuesta.data;
};