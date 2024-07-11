import { useState } from 'react'
import './styles/App.css'
import NavBar from './components/nav_bar'
import comedor from './assets/comedor.jpg'
import iconoMano from './assets/Mano.svg'

const items = [
  {id: 1, icon: iconoMano, texto: 'Lorem ipsum' },
  {id: 2, icon: iconoMano, texto: 'Lorem ipsum' },
  {id: 3, icon: iconoMano, texto: 'Lorem ipsum' },
  {id: 4, icon: iconoMano, texto: 'Lorem ipsum' },
]
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

      {/* Fila de items */}
      <div className="items-row">
        {items.map((item) => (
          <div key={item.id} className="item">
            <img src={item.icon} alt={`Icon ${item.id}`} className="item-icon" />
            <p className="item-text">{item.texto}</p>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default App
