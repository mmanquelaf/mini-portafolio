
function TarjetaProyecto({ titulo, descripcion, enlace }) {
  return (
    <article className="tarjeta-proyecto">
      <div className="proyecto-imagen" aria-hidden="true">
        <span>▧</span>
      </div>

      <div className="proyecto-contenido">
        <h2>{titulo}</h2>
        <p>{descripcion}</p>

        {enlace ? (
          <a
            href={enlace}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver proyecto →
          </a>
        ) : (
          <p className="sin-enlace">
            Repositorio no disponible
          </p>
        )}
      </div>
    </article>
  )
}

export default TarjetaProyecto
