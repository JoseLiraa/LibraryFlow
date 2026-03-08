using LibraryFlow.Application.Services;
using LibraryFlow.Application.DTOs;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.AspNetCore.Http.HttpResults;

namespace LibraryFlow.API.Controllers
{
    [ApiController]
    [Route("api/books")]
    public class LibroController : ControllerBase
    {
        private readonly LibroService _libroService;

        public LibroController(LibroService libroService)
        {
            _libroService = libroService;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerLibros()
        {
            try
            {
                var libros = await _libroService.ObtenerLibros();
                return Ok(libros);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }

        [HttpPost]
        public async Task<IActionResult> CrearLibro([FromBody] CrearLibroDto dto)
        {
            try
            {
                await _libroService.CrearLibro(dto);
                return Ok(new { mensaje = "Libro creado correctamente" });
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }
    }
}
