import { Routes, Route } from "react-router-dom"
import LibrosPage from "./pages/LibrosPage"
import ReservacionesPage from "./pages/ReservacionesPage"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col font-sans">
      <Navbar />
      <main className="grow">
        <Routes>
        <Route path="/" element={<LibrosPage />} />
        <Route path="/reservaciones" element={<ReservacionesPage />} />
      </Routes>
      </main>
    </div>
  )
}

export default App