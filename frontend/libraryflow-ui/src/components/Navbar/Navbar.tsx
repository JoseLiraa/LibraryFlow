import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-black tracking-tighter text-gray-900">
            LF<span className="text-indigo-600">.</span>
          </Link>
          
          {/* Enlaces Libros y Reservaciones */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Libros
            </Link>
            <Link to="/reservaciones" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">
              Reservaciones
            </Link>
          </div>
        </div>

        {/*Nuevo Libro*/}
        <div className="flex items-center gap-4">
          <Link 
            to="/agregar-libro" 
            className="hidden sm:flex items-center gap-2 py-2.5 px-5 bg-[#1a1a1a] text-white rounded-xl text-sm font-bold hover:bg-black transition-all active:scale-95 shadow-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4" />
            </svg>
            Nuevo Libro
          </Link>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;