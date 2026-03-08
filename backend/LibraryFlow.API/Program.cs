using LibraryFlow.Application.Interfaces;
using LibraryFlow.Application.Services;
using LibraryFlow.Infrastructure.Data;
using LibraryFlow.Infrastructure.Repositories;
using Microsoft.EntityFrameworkCore;

namespace LibraryFlow.API
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.

            builder.Services.AddDbContext<LibraryDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddScoped<ILibroRepository, LibroRepository>();
            builder.Services.AddScoped<LibroService>();

            builder.Services.AddScoped<IReservacionRepository, ReservacionRepository>();
            builder.Services.AddScoped<ReservacionService>();

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
