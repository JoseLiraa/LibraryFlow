import clienteAxios from "../api/clienteAxios";
import { Reservacion, CrearReservacionDto } from "../interfaces/Reservacion";

export const obtenerReservaciones = async (): Promise<Reservacion[]> => {
  const respuesta = await clienteAxios.get<Reservacion[]>("/reservations");
  return respuesta.data;
};

export const crearReservacion = async (datos: CrearReservacionDto): Promise<Reservacion> => {
  const respuesta = await clienteAxios.post<Reservacion>("/reservations", datos);
  return respuesta.data;
};