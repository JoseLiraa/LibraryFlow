import { useNuevoLibro } from "../../hooks/useNuevoLibro";
import { LibroIcon } from "../../components/icons/LibroIcon";
import { AutorIcon } from "../../components/icons/AutorIcon";
import { formularioStyles as estilos } from "./NuevoLibroPage.styles";

const NuevoLibroPage = () => {
  const { 
    formulario, 
    procesando, 
    manejarCambio, 
    manejarEnvio, 
    navegar 
  } = useNuevoLibro();

  return (
    <div className={estilos.contenedor}>
      <div className="max-w-2xl mx-auto">
        
        <button onClick={() => navegar(-1)} className={estilos.botonVolver}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Volver
        </button>

        <div className={estilos.tarjeta}>
          <header>
            <h1 className={estilos.tituloPagina}>Nuevo Libro</h1>
            <p className={estilos.descripcion}>
              Ingrese los detalles para integrar la obra al catálogo.
            </p>
          </header>

          <form onSubmit={manejarEnvio}>
            {/* Input Título */}
            <div className={estilos.grupoInput}>
              <label className={estilos.label}>Título de la Obra</label>
              <div className={estilos.inputWrapper}>
                <LibroIcon className={estilos.icono} />
                <input
                  required
                  name="titulo"
                  placeholder="Ej. Clean Code"
                  value={formulario.titulo}
                  onChange={manejarCambio}
                  className={estilos.input}
                />
              </div>
            </div>

            {/* Input Autor */}
            <div className={estilos.grupoInput}>
              <label className={estilos.label}>Nombre del Autor</label>
              <div className={estilos.inputWrapper}>
                <AutorIcon className={estilos.icono} />
                <input
                  required
                  name="autor"
                  placeholder="Ej. Robert C. Martin"
                  value={formulario.autor}
                  onChange={manejarCambio}
                  className={estilos.input}
                />
              </div>
            </div>

            {/* Input Stock */}
            <div className={estilos.grupoInput}>
              <label className={estilos.label}>Cantidad Inicial</label>
              <input
                required
                type="number"
                name="stock"
                min="1"
                value={formulario.stock}
                onChange={manejarCambio}
                className={estilos.input}
              />
            </div>

            <button
              type="submit"
              disabled={procesando}
              className={estilos.botonCrea}
            >
              {procesando ? "Guardando..." : "Registrar en Inventario"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NuevoLibroPage;