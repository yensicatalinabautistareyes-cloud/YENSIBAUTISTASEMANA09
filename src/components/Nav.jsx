function Nav(props) {

    console.log(props);

  return (
    <>
    <nav aria-label="Menú principal">
        <a href="#inicio">{props.menu[0].nombre}</a>
        <a href="#nosotros">{props.menu[1].nombre}</a>
        <a href="#servicios">{props.menu[2].nombre}</a>
        <a href="#contacto">{props.menu[3].nombre}</a>
    </nav>
    </>
  )
}

export default Nav
