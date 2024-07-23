
import Home from './pages/Home/Home'
import { useState } from 'react'
import './App.css'
import ParticlesComponent from './components/particles/ParticlesComponent'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>

    <Home isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
    <ParticlesComponent isDarkMode={isDarkMode} />
    </>
  )
  
}

export default App

