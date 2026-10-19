import { useState } from 'react'
import './App.css'
import Header from './components/Header' 
import Nav from './components/Nav'
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
      <Main frase={frases} />
      <Aside texto={textos} descripcion={descri} />
      <Footer />
    </>
  )
}

export default App
