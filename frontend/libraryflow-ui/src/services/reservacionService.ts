import clienteAxios from "../api/clienteAxios";

export const obtenerReservaciones = async () => {
  const respuesta = await clienteAxios.get("/reservations");
  return respuesta.data;
};

export const crearReservacion = async (idLibro, nombreUsuario) => {
  const respuesta = await clienteAxios.post("/reservations", {
    idLibro,
    nombreUsuario
  });

  return respuesta.data;
};