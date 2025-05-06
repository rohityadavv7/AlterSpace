import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import "./index.css"
import Signup from "./Components/Signup"
import Dashboard from "./Components/Dashboard/Dashboard"
import { Toaster } from "react-hot-toast"

function App() {
  

  return (
    <div className="h-screen overflow-x-hidden w-screen">
      
      <BrowserRouter>
      <Toaster/>
        <Routes>

          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/" element={<Login/>}/>

          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
