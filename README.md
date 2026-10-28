# Mini Portafolio Personal

## 1. Descripción del proyecto

Este proyecto consiste en un portafolio web personal desarrollado como parte de la Evaluación N.º 3 de la asignatura Desarrollo de Frontend, de la carrera Ingeniería Civil Informática.

El objetivo es presentar información personal, habilidades tecnológicas, proyectos realizados y un formulario de contacto, aplicando los conocimientos adquiridos sobre React, componentes, props, estados y navegación mediante React Router.

**Autor:** Matías Manquelaf  
**Carrera:** Ingeniería Civil Informática  
**Institución:** Instituto Tecnológico de la Universidad Católica de Temuco  
**Año:** 2026

## 2. Tecnologías utilizadas

- HTML5: estructura del contenido.
- CSS3: estilos visuales y diseño responsive.
- JavaScript: lógica y manejo de datos.
- React: creación de componentes y páginas.
- React Router: navegación entre rutas.
- Vite: creación y ejecución del proyecto.
- Git y GitHub: control de versiones y almacenamiento del código.

## 3. Requisitos previos

Para ejecutar este proyecto es necesario tener instalado:

- Node.js compatible con la versión de Vite utilizada.
- npm.
- Un navegador web.
- Un editor de código, como Visual Studio Code.

## 4. Instalación y ejecución

**Paso 1.** Clonar el repositorio:

```bash
git clone URL_DEL_REPOSITORIO
```

Reemplazar `URL_DEL_REPOSITORIO` por la dirección real del proyecto en GitHub.

**Paso 2.** Entrar a la carpeta:

```bash
cd mini-portafolio
```

**Paso 3.** Instalar las dependencias:

```bash
npm install
```

**Paso 4.** Iniciar el servidor de desarrollo:

```bash
npm run dev
```

**Paso 5.** Abrir en el navegador la dirección que muestra la terminal, normalmente:

`http://localhost:5173/`

Para comprobar que el proyecto compila correctamente:

```bash
npm run build
```

## 5. Estructura de carpetas

```text
mini-portafolio/
│
├── public/
│   └── perfil.png
│
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── TarjetaProyecto.jsx
│   │   └── FormularioContacto.jsx
│   │
│   ├── pages/
│   │   ├── Inicio.jsx
│   │   ├── SobreMi.jsx
│   │   ├── Habilidades.jsx
│   │   ├── Proyectos.jsx
│   │   └── Contacto.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── index.html
├── package.json
├── .gitignore
├── README.md
└── uso_ia.md
```

El archivo `perfil.png` es opcional y debe existir si se utiliza en la página Sobre mí.

### Función de los archivos principales

- **main.jsx:** inicia la aplicación React y configura BrowserRouter.
- **App.jsx:** define las cinco rutas de navegación.
- **Layout.jsx:** contiene los componentes compartidos y Outlet.
- **Header.jsx:** muestra los enlaces del menú.
- **Footer.jsx:** muestra