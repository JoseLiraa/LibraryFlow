# 📚 LibraryFlow

LibraryFlow es una aplicación web para la gestión de un catálogo de libros y reservas.  
Permite visualizar libros disponibles, crear nuevos libros y realizar reservaciones de manera sencilla.

Este proyecto está compuesto por:

- **Backend:** API REST desarrollada con .NET y arquitectura en capas
- **Frontend:** Aplicación desarrollada con React, TypeScript y TailwindCSS

---

# 🚀 Tecnologías utilizadas

## Backend
- .NET 8
- ASP.NET Core Web API
- Entity Framework Core
- SQL Server
- Arquitectura en capas (Domain, Application, Infrastructure, API)

## Frontend
- React
- TypeScript
- Vite
- TailwindCSS
- Axios
- React Router

---

# ⚙️ Instalación y ejecución

## 1. Clonar repositorio

```bash
git clone https://github.com/tuusuario/libraryflow.git
cd libraryflow/backend
```
# 🖥 Backend (.NET API)
## Configurar base de datos
Modificar la cadena de conexión en:
```bash
appsettings.json
```

## Ejecutar migraciones
```bash
dotnet ef database update
```

## Ejecutar la API
```bash
dotnet run
```
La API estará disponible en:
```bash
https://localhost:xxxx/swagger
```


# 🌐 Frontend (React)

Ir a la carpeta del frontend:
```bash
cd frontend/libraryflow-ui
```

## Instalar dependencias:
```bash
npm install
```

## Ejecutar la aplicación:
```bash
npm run dev
```

La aplicación estará disponible en:
```bash
http://localhost:xxxx
```

# 🔗 Endpoints 
Obtener libros
```bash
GET /api/books
```
Crear libro
```bash
POST /api/books
```
Crear reservación
```bash
POST /api/reservations
```
Obtener reservaciones
```bash
GET /api/reservations
```

## 📸 Capturas

### Catálogo de libros

![Catalogo](https://github.com/JoseLiraa/LibraryFlow/screenshots/1.PNG)

### Agregar libro

![Agregar libro](https://github.com/JoseLiraa/LibraryFlow/screenshots/4.PNG)

### Ver Reservaciones

![Reservaciones](https://github.com/JoseLiraa/LibraryFlow/screenshots/3.PNG)

### Agregar Reservaciones

![Reservaciones](https://github.com/JoseLiraa/LibraryFlow/screenshots/2.PNG)