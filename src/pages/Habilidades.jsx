
function Habilidades() {
    const habilidades = [
    { nombre: "HTML", nivel: 60, icono: "🌐" },
    { nombre: "CSS", nivel: 55, icono: "🎨" },
    { nombre: "JavaScript", nivel: 40, icono: "JS" },
    { nombre: "React", nivel: 30, icono: "⚛" },
    { nombre: "Python", nivel: 65, icono: "🐍" }
    ]

    const herramientas = [
    "Git",
    "GitHub",
    "VS Code"
    ]

  return (
    <section className="habilidades">
      <h1>Habilidades y Lenguajes</h1>

      <h2>Tecnologías</h2>

      <div className="lista-habilidades">
        {habilidades.map((habilidad) => (
          <article
            className="tarjeta-habilidad"
            key={habilidad.nombre}
          >
            <span className="habilidad-icono">
              {habilidad.icono}
            </span>

            <h3>{habilidad.nombre}</h3>

            <div
              className="barra-habilidad"
              role="progressbar"
              aria-label={habilidad.nombre}
              aria-valuenow={habilidad.nivel}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div
                className="barra-progreso"
                style={{ width: `${habilidad.nivel}%` }}
              />
            </div>

            <p className="porcentaje">
              {habilidad.nivel}%
            </p>
          </article>
        ))}
      </div>

      <h2>Herramientas</h2>

      <ul className="lista-herramientas">
        {herramientas.map((herramienta) => (
          <li key={herramienta}>
            {herramienta}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Habilidades
