using LibraryFlow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Application.Interfaces
{
    public interface ILibroRepository
    {
        Task<List<Libro>> ObtenerTodosAsync();
        Task<Libro?> ObtenerPorIdAsync(int id);
        Task ActualizarLibroAsync(Libro libro);
        Task AgregarLibroAsync(Libro libro);
    }
}
