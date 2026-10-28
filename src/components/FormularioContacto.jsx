
import { useState } from "react"

function FormularioContacto() {

    const [datos, setDatos] = useState({
        nombre: "",
        correo: "",
        mensaje: ""
    })

    const [errores, setErrores] = useState({})
    const [enviado, setEnviado] = useState(false)

    function manejarCambio(evento) {
        const { name, value } = evento.target

        setDatos({
            ...datos,
            [name]: value
        })

        setEnviado(false)
    }

    function manejarEnvio(evento) {
        evento.preventDefault()

        const nuevosErrores = {}

        if (!datos.nombre.trim()) {
            nuevosErrores.nombre = "El nombre es obligatorio"
        }

        if (!datos.correo.trim()) {
            nuevosErrores.correo = "El correo es obligatorio"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(datos.correo)) {
            nuevosErrores.correo = "El correo no es válido"
        }

        if (!datos.mensaje.trim()) {
            nuevosErrores.mensaje = "El mensaje es obligatorio"
        }

        setErrores(nuevosErrores)

        if (Object.keys(nuevosErrores).length === 0) {
            setEnviado(true)

            setDatos({
                nombre: "",
                correo: "",
                mensaje: ""
            })
        }
    }

    return (
        <form
            className="formulario-contacto"
            onSubmit={manejarEnvio}
            noValidate
        >

            <div>
                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={datos.nombre}
                    onChange={manejarCambio}
                />
                {errores.nombre && <p>{errores.nombre}</p>}
            </div>

            <div>
                <label htmlFor="correo">Correo electrónico</label>
                <input
                    type="email"
                    id="correo"
                    name="correo"
                    value={datos.correo}
                    onChange={manejarCambio}
                />
                {errores.correo && <p>{errores.correo}</p>}
            </div>

            <div>
                <label htmlFor="mensaje">Mensaje</label>
                <textarea
                    id="mensaje"
                    name="mensaje"
                    value={datos.mensaje}
                    onChange={manejarCambio}
                />
                {errores.mensaje && <p>{errores.mensaje}</p>}
            </div>

            <button type="submit">Enviar mensaje</button>

            {enviado && (
            <p>¡Formulario enviado correctamente!</p>
            )}

        </form>
    )
}

export default FormularioContacto
