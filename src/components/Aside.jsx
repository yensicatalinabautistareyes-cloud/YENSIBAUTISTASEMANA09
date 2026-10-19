function Aside(props) {

    console.log(props);

  return (
    <aside>
        <h2>{props.texto}</h2>
        <p>{props.descripcion}</p>
        <a href="#contacto">Conoce más sobre mí</a>
    </aside>
  )
}

export default Aside
