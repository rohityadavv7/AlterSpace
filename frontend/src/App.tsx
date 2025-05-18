import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Components/Login"
import "./index.css"
import Signup from "./Components/Signup"
import Dashboard from "./Components/Dashboard/Dashboard"
import { Toaster } from "react-hot-toast"
import {RecoilRoot} from "recoil"
import Share from "./Components/Share/Share"
import Hero from "./Components/Hero/Hero"
import {motion, useScroll, useMotionValueEvent} from "motion/react"

function App() {
  
  const {scrollY} = useScroll();

  useMotionValueEvent(scrollY, "change", (val) => {
    // console.log(val)
  })

  return (
    <div className="h-[300vh] bg-zinc-950 overflow-x-hidden w-screen">
      <RecoilRoot>
      <BrowserRouter>
      
      <Toaster/>
        <Routes>
          <Route path="/" element={<Hero/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/share/:shareId" element={<Share/>}/>
          <Route path="/login" element={<Login/>}/>

          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      
      </BrowserRouter>
      </RecoilRoot>
    </div>
  )
}

export default App
