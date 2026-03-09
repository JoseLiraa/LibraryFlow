export interface Libro {
  id: number;
  titulo: string;
  autor: string;
  stock: number;
}

export type CrearLibroDto = Omit<Libro, 'id'>;