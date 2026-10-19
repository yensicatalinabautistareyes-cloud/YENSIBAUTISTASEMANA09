import { useState } from 'react'
import './App.css'
import Header from './components/Header' 
import Nav from './components/Nav'
import Cuerpo from './components/Cuerpo'
import Main from './components/Main'
import Aside from './components/Aside'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)
  const menus = 
    [
      {nombre:"Inicio"},
      {nombre:"Nosotros"},
      {nombre:"Servicio"},
      {nombre:"Contacto"}
    ];
  const frases = [
    {texto:"Bienvenidos"},
    {texto:"Esta es mi primera página web con estructura semántica HTML5 y estilos CSS modernos."}
  ];
  const textos ="Información adicional";
  const descri ="Estoy aprendiendo HTML5, CSS3 y JavaScript.";

  return (
    <>
      <Header />
      <Nav menu={menus} />
      <Cuerpo titulo ={"Hola"}> 
        <h2>Segundo título</h2>
        <p>Este parrafo va a cambiar</p>
      </Cuerpo>
      <Main frase={frases} />
      <Aside texto={textos} descripcion={descri} />
      <Header />
      <Footer />
    </>
  )
}

export default App
