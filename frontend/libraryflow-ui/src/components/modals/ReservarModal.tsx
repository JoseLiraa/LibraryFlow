import { useState } from "react"; 
import { ReservarModalProps } from "../../interfaces/ReservarModal";
import { UsuarioIcon } from "../icons/UsuarioIcon";

export const ReservarModal = ({ 
  libroTitulo, 
  estaAbierto, 
  alCerrar, 
  alConfirmar, 
  Enviando 
}: ReservarModalProps) => {
  

  const [nombreUsuario, setNombreUsuario] = useState("");

  if (!estaAbierto) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
        onClick={alCerrar}
      />

      <div className="relative bg-white w-full max-w-md rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UsuarioIcon className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Confirmar Reserva</h2>
          <p className="text-gray-500 text-sm mt-1">
            Libro: <span className="font-semibold text-indigo-600">{libroTitulo}</span>
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 ml-1">
              Tu Nombre Completo
            </label>
            <input
              autoFocus
              type="text"
              value={nombreUsuario}
              onChange={(e) => setNombreUsuario(e.target.value)}
              placeholder="Ej. Jose Lira"
              className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all text-gray-900 font-medium"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={alCerrar}
              className="flex-1 py-4 px-6 rounded-2xl font-bold text-gray-500 hover:bg-gray-50 transition-colors"
            >
              Cancelar
            </button>
            <button
              disabled={!nombreUsuario.trim() || Enviando}
              onClick={() => alConfirmar(nombreUsuario)}
              className="flex-[2] py-4 px-6 bg-[#1a1a1a] text-white rounded-2xl font-bold hover:bg-black transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-black/10"
            >
              {Enviando ? "Procesando..." : "Confirmar Reserva"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};