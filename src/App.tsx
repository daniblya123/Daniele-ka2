import { useState } from 'react'
import Error from "./Pages/Error"
import Navbar from "./Navbar"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import BiscuitClicker from './Pages/BiscuitClicker'
import TemperatureChecker from './Pages/TemperatureChecker'

function App() {

  return (<>
    
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/BiscuitClicker" element={<BiscuitClicker/>}/>
      <Route path="/TemperatureChecker" element={<TemperatureChecker/>}/>
      <Route path="*" element={<Error />}/>
    </Routes>
    
    </>)
}

export default App
