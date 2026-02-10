import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Step1 from './pages/Step1'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Bookings from './pages/Bookings'
import Step2 from './pages/Step2'
import Step3 from './pages/Step3'
import Review from './pages/Review'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/bookings" element={<Bookings />}/>
        <Route path="/plan/step1" element={<Step1 />}/>
        <Route path="/plan/step2" element={<Step2 />}/>
        <Route path="/plan/step3" element={<Step3 />}/>
        <Route path="/plan/review" element={<Review />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
