import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import Footer from './components/Footer'
import Homepage from './components/Homepage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Homepage/>
      <Footer/>
    </>
  )
}

export default App
