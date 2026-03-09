export const getLibroStyles = (esAgotado: boolean) => {
  return {
    card: `group relative bg-white border border-gray-100 rounded-2xl p-8 transition-all duration-300 flex flex-col items-center text-center 
      ${esAgotado ? 'opacity-60 bg-gray-50/50' : 'hover:shadow-xl hover:shadow-gray-200/40 hover:-translate-y-1'}`,
    
    contenedorIcono: `w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-colors 
      ${esAgotado ? 'bg-gray-200' : 'bg-gray-100 group-hover:bg-indigo-50'}`,

    icono: `w-10 h-10 transition-colors 
      ${esAgotado ? 'text-gray-400' : 'text-gray-400 group-hover:text-indigo-600'}`,

    titulo: `text-xl font-bold tracking-tight mb-1 
      ${esAgotado ? 'text-gray-500' : 'text-gray-900'}`,

    autor: `text-sm font-medium uppercase tracking-widest mb-4 
      ${esAgotado ? 'text-gray-400' : 'text-indigo-600'}`,

    stock:  `inline-block px-3 py-1 rounded-full text-xs font-semibold mb-6 border
      ${esAgotado ? 'bg-gray-100 text-gray-400 border-transparent' : 'text-gray-500 border-gray-100'}`,

    boton: `w-full py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 shadow-sm
      ${esAgotado ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-[#1a1a1a] text-white hover:bg-black active:scale-95'}`
  };
};