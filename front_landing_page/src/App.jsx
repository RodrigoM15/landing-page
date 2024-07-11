import { useState } from 'react'
import './styles/App.css'
import NavBar from './components/nav_bar'
import comedor from './assets/comedor.jpg'

function App() {
  

  return (
    <div className='body'>
      {/* Barra de navegacion */}
      <NavBar/>

      {/* Imagen principal con titulo */}
      <div className="background-container" style={{ backgroundImage: `url(${comedor})` }}>
        <div className="overlay">
          <h1>LOGO DE INSTITUCIÓN</h1>
          <h1>FORMATO PNG</h1>
        </div>
      </div>

      
    </div>
  )
}

export default App
