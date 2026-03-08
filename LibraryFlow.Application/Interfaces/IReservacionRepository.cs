using LibraryFlow.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Application.Interfaces
{
    public interface IReservacionRepository
    {
        Task CrearReservacionAsync(Reservacion reservacion);
        Task<List<Reservacion>> ObtenerTodosAsync();
    }
}
