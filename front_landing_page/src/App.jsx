import { useEffect, useState } from 'react'
import './styles/App.css'
import NavBar from './components/nav_bar'
import comedor from './assets/comedor.jpg'
import iconoMano from './assets/Mano.svg'
import Button from './components/button'
import { Card_calendario, Card_calendario_principal } from './components/card_calendario'
import useEventos from './hooks/use_evento'
import usePublicaciones from './hooks/use_publicacion'
import { convertirFecha } from './utils/utils'

const items = [
  {id: 1, icon: iconoMano, texto: 'Lorem ipsum' },
  {id: 2, icon: iconoMano, texto: 'Lorem ipsum' },
  {id: 3, icon: iconoMano, texto: 'Lorem ipsum' },
  {id: 4, icon: iconoMano, texto: 'Lorem ipsum' },
]

const funciones = [
  {id: 1, titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.'},
  {id: 2, titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.'},
  {id: 3, titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.'},
  {id: 4, titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr', texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.'},
]

const publicaciones = [
  {
    id: 1,
    imagen: comedor, 
    titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr',
    texto: 'Proin rutrum massa orci, vel imperdiet lorem imperdiet mattis. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque est felis, rutrum id ligula sit amet, molestie consequat risus. Curabitur porttitor lectus iaculis porta vulputate. Vestibulum aliquet erat ut pharetra consectetur. Donec tempor at tellus malesuada aliquam. Quisque rutrum felis massa, tincidunt dapibus nulla suscipit ac. Pellentesque enim eros, aliquet ut congue at, ullamcorper sit amet odio. Nulla porta lobortis arcu, eu vulputate metus efficitur ac. Vivamus ut augue in arcu volutpat finibus. Nullam vitae turpis aliquam, sodales nunc sed, posuere ex. Aenean malesuada suscipit ipsum, eu imperdiet turpis condimentum non.',
    fecha: '26 de mayo 2024', 
    enlace: 'https://example.com/link1', 
  },
  {
    id: 2,
    imagen: comedor,
    titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.',
    fecha: '26 de mayo 2024',
    enlace: 'https://example.com/link2',
  },
  {
    id: 3,
    imagen: comedor,
    titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.',
    fecha: '26 de mayo 2024',
    enlace: 'https://example.com/link3',
  },
  {
    id: 4,
    imagen: comedor,
    titulo: 'Lorem ipsum dolor sit amet, conseteur sadipscing elitr',
    texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vestibulum erat non massa tristique.',
    fecha: '26 de mayo 2024',
    enlace: 'https://example.com/link4',
  },
];

const constEventos = [
  {
    id: 1,
    fecha: '15062024',
    titulo: 'Lorem ipsum',
    descripcion: 'Proin rutrum massa orci, vel imperdiet lorem imperdiet mattis.',
    enlace: 'enlace.descarga',
    ubicacion: 'Lorem ipsum dolor sit amet, conseteur',
    imagen: comedor
  },
  {
    id: 2,
    fecha: '24062024',
    titulo: 'Lorem ipsum dolor',
    descripcion: 'Vivamus ut augue in arcu volutpat finibus. Nullam vitae turpis aliquam, sodales nunc sed, posuere ex.',
    enlace: 'enlace.descarga',
    ubicacion: 'Lorem ipsum dolor sit amet, conseteur',
    imagen: comedor
  },
  {
    id: 3,
    fecha: '27062024',
    titulo: 'Lorem ipsum dolor sit amen',
    descripcion: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque est felis, rutrum id ligula sit amet.',
    enlace: 'enlace.descarga',
    ubicacion: 'Lorem ipsum dolor sit amet, conseteur',
    imagen: comedor
  },
  {
    id: 4,
    fecha: '30062024',
    titulo: 'Lorem ipsum dolor sit amen, consetetur',
    descripcion: 'Aenean malesuada suscipit ipsum, eu imperdiet turpis condimentum non.',
    enlace: 'enlace.descarga',
    ubicacion: 'Lorem ipsum dolor sit amet, conseteur',
    imagen: comedor
  },
]

function App() {
  
  const { eventos } = useEventos();
  const { publicaciones } = usePublicaciones();

  const [eventoSeleccionado, setEventoSeleccionado] = useState(constEventos[0])
  const seleccionarEvento = (evento) => {
    setEventoSeleccionado(evento);
  };

  return (
    <div className='body'>
      {/* Barra de navegacion */}
      <NavBar/>

      <div className='scrollable-content'>
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

        {/* Funciones */}
        <div className='funciones-containter'>
          <h1>Funciones</h1>
          <div className='funciones-cards'>
            {funciones.map((funcion) => (
              <div key={funcion.id} className="card-funcion">
                <h2>{funcion.titulo}</h2>
                <p>{funcion.texto}</p>
            </div>
            ))}
          </div>
        </div>

        {/* Publicaciones */}
        <div className='publicaciones-containter'>
          <div className='encabezado-publicaciones'>
            <h1>Publicaciones</h1>
            <h2>Ver todos</h2>
          </div>
          <div className='cards-publicaciones'>
            {publicaciones.map((pub) => (
              <div key={pub.id} className='publicacion'>
                <img src={pub.imagen} alt={pub.titulo} className='publicacion-imagen' />
                <div className='publicacion-content'>
                  <h3 className='publicacion-titulo'>{pub.titulo}</h3>
                  {pub.id === 1 && (
                    <>
                      <p>{pub.texto}</p>
                      <div className='fecha-button'>
                        <p className='publicacion-fecha'>{convertirFecha(pub.fecha)}</p>
                        <Button
                          text={'Leer artículo'}
                        />
                      </div>
                    </>
                  )}
                  {pub.id != 1 && (
                    <>
                      <p className='publicacion-fecha'>{pub.fecha}</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Calendario */}
        <div className='calendario-containter'>
          <h1>Calendario</h1>
          <div className='calendario-body'>
            <div className='cards-calendario'>
              {eventos.map((evento) => (
                <Card_calendario
                  key={evento.id}
                  fecha={evento.fecha}
                  titulo={evento.titulo}
                  enlace={evento.enlace}
                  onClick={() => seleccionarEvento(evento)}
                  isSelected={evento.id === eventoSeleccionado.id}
                />
              ))}
            </div>
            <div className='evento-calendario'>
              <Card_calendario_principal
                imagen = {eventoSeleccionado.imagen || comedor}
                descripcion={eventoSeleccionado.descripcion}
                ubicacion={eventoSeleccionado.ubicacion}
              />
            </div>
          </div>
        </div>

        {/* Pie de pagina */}
        <div className='pie-pagina'/>

      </div>
    </div>
  )
}

export default App
