import TarjetaProyecto from "../components/TarjetaProyecto"

function Proyectos() {

    const proyectos = [
        {
        titulo: "Videojuego con Pygame",
        descripcion: "Videojuego 2D desarrollado con Python y Pygame.",
        enlace: "https://github.com/mmanquelaf/EID-SpaceShooter.git"
        },
        {   
        titulo: "Portafolio Web",
        descripcion: "Portafolio personal desarrollado con HTML, CSS",
        enlace: "https://github.com/mmanquelaf/portafolio.git"
        },
    ]

    return (
        <section className="proyectos">
        <h1>Mis proyectos</h1>
        <div className="lista-proyectos">
        {proyectos.map((proyecto) => (
            <TarjetaProyecto
            key={proyecto.titulo}
            titulo={proyecto.titulo}
            descripcion={proyecto.descripcion}
            enlace={proyecto.enlace}
            />
        ))}
        </div>

    </section>
    )
}

export default Proyectos
