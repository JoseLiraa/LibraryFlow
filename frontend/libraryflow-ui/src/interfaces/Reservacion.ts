export interface Reservacion {
  id: number;
  nombreUsuario: string;
  tituloLibro: string;
  fechaReservacion: string;
}

export interface CrearReservacionDto {
  idLibro: number;
  nombreUsuario: string;
}