using LibraryFlow.Application.Interfaces;
using LibraryFlow.Domain.Entities;
using LibraryFlow.Infrastructure.Data;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Infrastructure.Repositories
{
    public class LibroRepository : ILibroRepository
    {
        private readonly LibraryDbContext _context;

        public LibroRepository(LibraryDbContext context)
        {
            _context = context;
        }

        public async Task<List<Libro>> ObtenerTodosAsync()
        {
            return await _context.Libros.ToListAsync();
        }

        public async Task<Libro?> ObtenerPorIdAsync(int id)
        {
            return await _context.Libros.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task ActualizarLibroAsync(Libro libro)
        {
            _context.Libros.Update(libro);
            await _context.SaveChangesAsync();
        }
    }
 }
