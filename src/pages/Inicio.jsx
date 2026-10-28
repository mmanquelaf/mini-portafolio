
import { Link } from "react-router-dom"

function Inicio() {
  const caracteristicas = [
    { icono: "⌨", titulo: "Desarrollo Frontend" },
    { icono: "▣", titulo: "Proyectos Reales" },
    { icono: "♧", titulo: "Aprendizaje Continuo" },
    { icono: "★", titulo: "Compromiso y Pasión" }
  ]

  return (
    <section className="inicio">
      <div className="presentacion">
        <div className="presentacion-texto">
          <h1>Hola, soy Matías Manquelaf</h1>
          <h2>Estudiante de Ingeniería Civil Informática</h2>

          <p>
            Bienvenido a mi portafolio.
            Aquí puedes conocer más sobre mí,
            mis habilidades y proyectos.
          </p>

          <Link to="/sobre-mi">Explorar</Link>
        </div>

        <div className="imagen-inicio" aria-hidden="true">
          <span>▧</span>
        </div>
      </div>

      <div className="caracteristicas">
        {caracteristicas.map((item) => (
          <article key={item.titulo}>
            <span className="caracteristica-icono">
              {item.icono}
            </span>
            <h3>{item.titulo}</h3>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Inicio
