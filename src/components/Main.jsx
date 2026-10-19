function Main(props) {
    
    console.log(props);

  return (
        <main id="inicio">
            <section id="nosotros">
                <h2>{props.frase[0].texto}</h2>
                <p>{props.frase[1].texto}</p>
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=80"
                    alt="Escritorio con computadora para programación web"/>
            </section>

            <section id="servicios">
                <h2>Mis servicios</h2>

                <div className="tarjetas">
                    <article className="tarjeta">
                        <h3>Diseño web</h3>
                        <p>Creación de páginas atractivas y modernas.</p>
                    </article>

                    <article className="tarjeta">
                        <h3>Programación</h3>
                        <p>Desarrollo de sitios web interactivos.</p>
                    </article>

                    <article className="tarjeta">
                        <h3>Diseño adaptable</h3>
                        <p>Páginas que se ajustan a diferentes pantallas.</p>
                    </article>
                </div>
            </section>
        </main>

  )
}

export default Main
