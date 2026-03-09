using LibraryFlow.Application.DTOs;
using LibraryFlow.Application.Interfaces;
using LibraryFlow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Application.Services
{
    public class ReservacionService
    {
        private readonly ILibroRepository _libroRepository;
        private readonly IReservacionRepository _reservacionRepository;

        public ReservacionService(ILibroRepository libroRepository,
            IReservacionRepository reservacionRepository)
        {
            _libroRepository = libroRepository;
            _reservacionRepository = reservacionRepository;
        }

        public async Task CrearReservacion(int idLibro, string nombreUsuario)
        {
            var libro = await _libroRepository.ObtenerPorIdAsync(idLibro)
                ?? throw new Exception("Libro no encontrado");

            if (libro.StockDisponible <= 0) { throw new Exception("No hay stock disponible"); }

            libro.StockDisponible -= 1;

            var reservacion = new Reservacion
            {
                IdLibro = idLibro,
                NombreUsuario = nombreUsuario,
                FechaReservacion = DateTime.Now
            };

            await _reservacionRepository.CrearReservacionAsync(reservacion);
            await _libroRepository.ActualizarLibroAsync(libro);
        }

        public async Task<List<ReservacionDto>> ObtenerReservas()
        {
            var reservas = await _reservacionRepository.ObtenerTodosAsync();

            return reservas.Select(x => new ReservacionDto
            {
                Id = x.Id,
                NombreUsuario = x.NombreUsuario,
                TituloLibro = x.Libro.Titulo,
                FechaReservacion = x.FechaReservacion
            }).ToList();
        }
    }
}
