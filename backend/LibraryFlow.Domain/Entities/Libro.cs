using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Domain.Entities
{
    public class Libro
    {
        [Key]
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Autor { get; set; }
        public int StockDisponible { get; set; }
        public List<Reservacion> Reservaciones { get; set; } = new();
    }
}
