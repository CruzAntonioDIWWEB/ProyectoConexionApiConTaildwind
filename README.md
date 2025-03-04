# Proyecto: Tarjetas Interactivas de Gatitos

### Autor: Antonio Cruz

---

## Descripción

Este proyecto consiste en un sitio web con dos páginas (`index.html` y `jquery.html`) que muestran tarjetas interactivas de gatitos utilizando la API de The Cat API. Las tarjetas muestran un efecto giratorio al pasar el ratón y permiten desplazamiento infinito para cargar más contenido de forma dinámica.

---

## Características
- **Efecto de giro:** Las tarjetas se giran al pasar el ratón, utilizando combinaciones de CSS y lógica en JavaScript/jQuery.
- **Desplazamiento Infinito:** Permite la carga dinámica de nuevas tarjetas sin necesidad de recargar la página.
- **Diseño Adaptable:** Se ha usado TailwindCSS para asegurar que la web sea responsiva.
- **Conexión con API:** Uso de promesas para conectar y obtener datos de The Cat API con JavaScript y jQuery.

---

## Tecnologías Utilizadas
- **Vite:** Para la configuración del proyecto y entorno de desarrollo.
- **JavaScript y jQuery:** Para la lógica del proyecto y la interacción con la API.
- **TailwindCSS:** Para los estilos y el diseño adaptable.
- **Flowbite:** Componentes adicionales para el encabezado y pie de página.
- **The Cat API:** Para obtener las imágenes y datos de las tarjetas.

---

## Requisitos Previos
- Tener **Node.js** y **npm** instalados en tu máquina.

---

## Instalación y Configuración
```bash
# Clonar el repositorio
git clone [https://github.com/CruzAntonioDIWWEB/ProyectoConexionApiConTaildwind]
cd vite-project

# Instalar las dependencias
npm install

# Iniciar el servidor de desarrollo
npm run dev
```

---

## Estructura del Proyecto
```
VITE-PROJECT
├─ node_modules
├─ public
├─ src
│   ├─ css
│   │   └─ styles.css
│   ├─ js
│   │   ├─ main.js
│   │   └─ mainJquery.js
├─ .gitignore
├─ index.html
├─ jquery.html
├─ package-lock.json
├─ package.json
├─ README.md
└─ vite.config.js
```

---

## Flujo de Trabajo
1. **Configuración del Proyecto:**
   - Se creó el proyecto utilizando Vite.
   - Se configuró TailwindCSS mediante el plugin `@tailwindcss/vite` para aplicar estilos.

2. **Estructuración de Archivos:**
   - Se definieron las carpetas `src/js` para los scripts de JavaScript y jQuery y `src/css` para los estilos.
   - Se utilizaron las páginas `index.html` (JavaScript puro) y `jquery.html` (jQuery) para mostrar el mismo contenido con diferentes enfoques.

3. **Conexión con la API de Gatitos:**
   - Se implementaron las funciones de conexión a `The Cat API` utilizando promesas con `fetch` en JavaScript y `$.ajax` en jQuery.
   - Se manejaron respuestas asíncronas para almacenar los datos en `localStorage` y evitar llamadas innecesarias a la API.

4. **Creación de Tarjetas Interactivas:**
   - Las tarjetas se crean dinámicamente utilizando los datos de la API.
   - Se aplica un efecto de giro al pasar el ratón usando clases de TailwindCSS y lógica en JS/jQuery.

5. **Implementación del Desplazamiento Infinito:**
   - Se añadió un event listener para detectar el scroll y cargar más tarjetas cuando se alcanza el final de la página.

6. **Pruebas y Ajustes:**
   - Se realizaron pruebas locales con `npm run dev`.
   - Se ajustaron estilos y se optimizó la lógica de carga de tarjetas.

---

## Uso del Proyecto
- Accede a `http://localhost:3000` tras iniciar el servidor.
- Alterna entre las opciones del menú para ver las implementaciones en JavaScript y jQuery.
- Al desplazarte hacia abajo podrás probar el desplazamiento infinito.

---

## Consideraciones
- **Clave de API:** La clave de `The Cat API` se encuentra directamente en el código.
- **Solo en Local:** Este proyecto se ejecuta únicamente en modo de desarrollo local.

---
