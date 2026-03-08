using LibraryFlow.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LibraryFlow.Infrastructure.Data
{
    public class LibraryDbContext : DbContext
    {
        public LibraryDbContext(DbContextOptions<LibraryDbContext> options) : base(options) { }

        public DbSet<Libro> Libros { get; set; }
        public DbSet<Reservacion> Reservaciones { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Libro>().HasData(
                new Libro { Id = 1, Titulo = "La teoría del todo", Autor = "Stephen Hawking", StockDisponible = 5 },
                new Libro { Id = 2, Titulo = "Hábitos Atómicos", Autor = "James Clear", StockDisponible = 2 },
                new Libro { Id = 3, Titulo = "Soltar para avanzar", Autor = "Dori Sánchez", StockDisponible = 3 }
                );
        }
    }
}
