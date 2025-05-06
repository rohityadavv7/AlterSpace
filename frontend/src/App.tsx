import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import "./index.css"
import Signup from "./Components/Signup"

function App() {
  

  return (
    <div className="h-screen overflow-x-hidden w-screen">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>

          <Route path="/signup" element={<Signup/>}/>
        </Routes>
        
      </BrowserRouter>
      
    </div>
  )
}

export default App
