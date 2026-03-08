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
    public class LibroService
    {
        private readonly ILibroRepository _libroRepository;

        public LibroService(ILibroRepository libroRepository)
        {
            _libroRepository = libroRepository;
        }

        public async Task<List<LibroDto>> ObtenerLibros()
        {
            var libros = await _libroRepository.ObtenerTodosAsync();

            return libros.Select(x => new LibroDto
            {
                Id = x.Id,
                Titulo = x.Titulo,
                Autor = x.Autor,
                Stock = x.StockDisponible
            }).ToList();
        }

        public async Task CrearLibro(CrearLibroDto dto)
        {
            if (dto.Stock < 0) throw new Exception("El stock no puede ser negativo.");

            var nuevoLibro = new Libro
            {
                Titulo = dto.Titulo,
                Autor = dto.Autor,
                StockDisponible = dto.Stock
            };

            await _libroRepository.AgregarLibroAsync(nuevoLibro);
        }
    }
}
