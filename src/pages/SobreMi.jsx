import fotoPerfil from '../assets/perfil.jpg';
function SobreMi() {
    return (
        <section className="sobre-mi">
            <div className="perfil">
                <img src={fotoPerfil} alt="Imagen de perfil"/>

                <div>
                    <h1>Sobre mí</h1>
                    <p>
                    Soy Matías Manquelaf, estudiante de
                    Ingeniería Civil Informática.
                    Me interesa la programación y
                    desarrollar mis habilidades
                    en el mundo de la tecnología.
                    </p>
                </div>
            </div>

            <div className="estudios">
                <h2>¿Qué estudio?</h2>
                <p>
                    Estudio Ingeniería Civil Informática
                    en la Universidad Católica de Temuco.
                </p>
            </div>

            <div className="intereses">
                <h2>¿Qué me interesa?</h2>
                <ul>
                    <li>Desarrollo web y frontend</li>
                    <li>Programación de videojuegos</li>
                    <li>Aprender nuevas tecnologías</li>
                    <li>Crear proyectos personales</li>
                </ul>
            </div>
        </section>
    )
}

export default SobreMi