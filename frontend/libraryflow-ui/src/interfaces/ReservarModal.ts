export interface ReservarModalProps {
  libroTitulo: string;
  estaAbierto: boolean;
  alCerrar: () => void;
  alConfirmar: (nombre: string) => void;
  Enviando: boolean;
}