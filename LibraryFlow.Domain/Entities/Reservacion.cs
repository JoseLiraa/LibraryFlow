using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Domain.Entities
{
    public class Reservacion
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("Libro")]
        public int IdLibro { get; set; }
        public string NombreUsuario { get; set; }
        public DateTime FechaReservacion { get; set; }

        public Libro Libro { get; set; }
    }
}
