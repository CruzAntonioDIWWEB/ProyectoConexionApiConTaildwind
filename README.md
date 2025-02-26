# Proyecto: Tarjetas Interactivas de Gatitos

### Autor: Antonio Cruz

---

## Descripción

Este proyecto consiste en un sitio web con dos páginas (`index.html` y `jquery.html`) que muestran tarjetas interactivas de gatitos utilizando la API de The Cat API. Las tarjetas muestran un efecto de volteo al pasar el ratón y permiten desplazamiento infinito para cargar más contenido de forma dinámica.

---

## Características
- **Efecto de volteo** al pasar el ratón sobre las tarjetas.
- **Desplazamiento infinito** para cargar más tarjetas dinámicamente.
- **Adaptable** a todas las resoluciones mediante TailwindCSS.
- Uso de **JavaScript** en `index.html` y **jQuery** en `jquery.html` para conectar a la API.
- Componentes personalizados con **Flowbite**.

---

## Tecnologías Utilizadas

- **Vite:** Empaquetador del proyecto.
- **JavaScript y jQuery:** Para la lógica y la interacción con la API.
- **TailwindCSS:** Para el diseño adaptable.
- **Flowbite:** Componentes para el encabezado y pie de página.
- **The Cat API:** Para las imágenes de gatitos.

---

## Requisitos Previos

- **Node.js** y **npm** instalados.

---

## Instalación y Configuración

```bash
# Clonar el repositorio
git clone [https://github.com/CruzAntonioDIWWEB/ProyectoConexionApiConTaildwind]

# Entrar en el directorio del proyecto
cd vite-project

# Instalar las dependencias
npm install

# Ejecutar el servidor de desarrollo
npm run dev
```

---

## Estructura del Proyecto

```
vite-project/
├─ node_modules/
├─ public/
├─ src/
│   ├─ css/
│   │   └─ styles.css
│   ├─ js/
│   │   ├─ main.js
│   │   └─ mainJquery.js
├─ .gitignore
├─ index.html
├─ jquery.html
├─ package.json
├─ vite.config.js
└─ README.md
```

---

## Flujo de Trabajo

1. **Configuración inicial** del proyecto con Vite.
2. Uso de **TailwindCSS** para los estilos.
3. Implementación de las llamadas a la API con **JavaScript** y **jQuery**.
4. Aplicación del **efecto de volteo** con CSS y lógica de JS/jQuery.
5. Pruebas locales con `npm run dev`.

---

## Uso del Proyecto

- Abre `http://localhost:3000` en tu navegador.
- Navega entre las dos páginas (`index.html` y `jquery.html`).
- Prueba el **desplazamiento infinito** y el **efecto de volteo** de las tarjetas.

---

## Consideraciones

- No se requiere despliegue en un hosting externo, solo en local.
- Clave API expuesta directamente en el código.

---

