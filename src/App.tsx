import Form from "./pages/StdudentForm"
import Dashboard from './pages/Dashboard';
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={} /> */}
        <Route path="/student/form" element={<Form />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </>
  )
}

export default App
