using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Application.DTOs
{
    public class ReservacionDto
    {
        public int Id { get; set; }
        public string NombreUsuario { get; set; }
        public string TituloLibro { get; set; }
        public DateTime FechaReservacion { get; set; }
    }
}
