import { Routes, Route } from "react-router-dom"
import LibrosPage from "./pages/LibrosPage"
import ReservacionesPage from "./pages/ReservacionesPage"
import NuevoLibroPage from "./pages/NuevoLibro/NuevoLibroPage"
import Navbar from "./components/Navbar/Navbar"
import { Toaster } from 'sonner'

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans">
      <Toaster position="top-right" richColors />
      <Navbar />
      <main className="grow">
        <Routes>
        <Route path="/" element={<LibrosPage />} />
        <Route path="/reservaciones" element={<ReservacionesPage />} />
        <Route path="/agregar-libro" element={<NuevoLibroPage />} />
      </Routes>
      </main>
    </div>
  )
}

export default App