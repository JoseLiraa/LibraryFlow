using LibraryFlow.Application.DTOs;
using LibraryFlow.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace LibraryFlow.API.Controllers
{
    [ApiController]
    [Route("api/reservationes")]
    public class ReservacionController : ControllerBase
    {
        private readonly ReservacionService _reservacionService;

        public ReservacionController(ReservacionService reservacionService)
        {
            _reservacionService = reservacionService;
        }

        [HttpPost]
        public async Task<IActionResult> CrearReserva(CrearReservacionDto dto)
        {
            try
            {
                await _reservacionService.CrearReservacion(dto.IdLibro, dto.NombreUsuario);
                return Ok("Reservación creada con éxito");
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
        }
    }
}
