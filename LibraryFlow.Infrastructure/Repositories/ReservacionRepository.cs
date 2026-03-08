using LibraryFlow.Application.DTOs;
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
    public class ReservacionRepository : IReservacionRepository
    {
        private readonly LibraryDbContext _context;

        public ReservacionRepository(LibraryDbContext context)
        {
            _context = context;
        }

        public async Task CrearReservacionAsync(Reservacion reservacion)
        {
            await _context.Reservaciones.AddAsync(reservacion);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Reservacion>> ObtenerTodosAsync()
        {
            return await _context.Reservaciones
                .Include(x => x.Libro)
                .ToListAsync();
        }
    }
}
