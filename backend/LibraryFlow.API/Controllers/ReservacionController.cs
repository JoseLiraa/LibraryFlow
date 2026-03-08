using LibraryFlow.Application.DTOs;
using LibraryFlow.Application.Services;
using Microsoft.AspNetCore.Mvc;

namespace LibraryFlow.API.Controllers
{
    [ApiController]
    [Route("api/reservations")]
    public class ReservacionController : ControllerBase
    {
        private readonly ReservacionService _reservacionService;

        public ReservacionController(ReservacionService reservacionService)
        {
            _reservacionService = reservacionService;
        }

        [HttpGet]
        public async Task<IActionResult> ObtenerReservaciones()
        {
            try
            {
                var reservaciones = await _reservacionService.ObtenerReservas();
                return Ok(reservaciones);
            }
            catch (Exception ex)
            {
                return BadRequest(new { mensaje = ex.Message });
            }
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
