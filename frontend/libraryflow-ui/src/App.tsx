import { Routes, Route } from "react-router-dom"
import LibrosPage from "./pages/LibrosPage"

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Routes>
        <Route path="/" element={<LibrosPage />} />
      </Routes>
    </div>
  )
}

export default App