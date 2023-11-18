import { useState } from 'react'
import './App.css'
import Navigation from './components/navigation'
import Footer from './components/Footer'
import Homepage from './components/Homepage';
import Catalog from './components/Catalog';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation/>
      <Homepage/>
      <Catalog/>
      <Login/>
      <Register/>
      <Footer/>
    </>
  )
}

export default App
