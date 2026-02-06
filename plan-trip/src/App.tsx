import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Step1 from './pages/Step1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      Home Page
      <Step1/>
    </>
  )
}

export default App
