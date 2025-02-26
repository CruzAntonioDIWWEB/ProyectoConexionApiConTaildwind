async function obtenerAlbums() {
   let listaCargada = localStorage.getItem('listaAlbums') || [];

   if ( listaCargada.length  == 0 ) {
      fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => localStorage.setItem('listaAlbums', JSON.stringify(json)))
     .then(() => console.log('Albums cargados' + localStorage.getItem('listaAlbums')))
   } else {
      console.log('No hace falta volver a cargar la petición');
   }
}

async function obtenerUsuarios() {
  let listaCargada = localStorage.getItem('listaUsuarios') || [];
  if ( listaCargada.length  == 0 ) {
     fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => localStorage.setItem('listaUsuarios', JSON.stringify(json)))
      .then(() => console.log('Albums cargados' + localStorage.getItem('listaUsuarios')))
  } else {
      console.log('No hace falta volver a cargar la petición');
   }
}

async function obternerFotos() {
  let listaCargada = localStorage.getItem('listaFotos') || [];
  if ( listaCargada.length  == 0 ) {
     fetch('https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_i99DweF5QsCH8LT0cxcX1uBPgiPupixOgqtt83VXfDXdViIrr9pCVt27GKSMmrPU') //live_l0pN2g1nkzCwC2h8VPomzLeG3dHNAuEb5lTgIG9qIFZkZehGRo8tihgevzbyRfV2
     .then(response => response.json())
     .then(json => localStorage.setItem('listaFotos', JSON.stringify(json)))
     .then(() => console.log('Albums cargados' + localStorage.getItem('listaFotos')))
  } else {
      console.log('No hace falta volver a cargar la petición');
   }
}

async function construirHTML(startIndex, endIndex) {
 obtenerAlbums();
 obtenerUsuarios();
 obternerFotos();
 let main = document.querySelector('main');
 let sectionCards = document.getElementById('sectionCards') || document.createElement('section');
 sectionCards.setAttribute('id', "sectionCards");
 // Modificado para mostrar las tarjetas horizontalmente con flexbox y wrap
 sectionCards.setAttribute('class', 'pt-20 pb-20 max-w-7xl mx-auto flex flex-wrap gap-6 justify-center');

 if (!document.getElementById('sectionCards')) {
    main.appendChild(sectionCards);
 }

 let listaAlbums = JSON.parse(localStorage.getItem('listaAlbums'));
 let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
 let listaFotos = JSON.parse(localStorage.getItem('listaFotos'));

 // Creamos una fila para el conjunto actual de tarjetas
 let currentRow = document.createElement('div');
 currentRow.setAttribute('class', 'flex flex-wrap gap-6 justify-center w-full');
 sectionCards.appendChild(currentRow);

 for (let i = startIndex; i < endIndex && i < listaAlbums.length; i++) {
    let album = listaAlbums[i];

    //Creamos el contenedor principal de la tarjeta 
    let albumCard = document.createElement('div'); 
    albumCard.setAttribute('class', 'group w-72 h-72 bg-transparent border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300');
    
    //Contenedor Interior Giratorio
    let contenedorInterior = document.createElement('div');
    contenedorInterior.setAttribute('class', 'relative w-full h-full text-center transition-transform duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]');
    
    //Cogemos una de las fotos de forma aleatoria de este album
    let fotoAleatoria = listaFotos[Math.floor(Math.random() * listaFotos.length)];
    
    //Creamos la tarjeta frontal
    let tarjetaFrontal = document.createElement('div');
    tarjetaFrontal.setAttribute('class', 'absolute w-full h-full bg-gray-200 text-black [backface-visibility:hidden]');
    let imagenAlbum = document.createElement('img');
    imagenAlbum.setAttribute('class', 'w-full h-full object-cover');
    imagenAlbum.setAttribute('src', fotoAleatoria.url);
    imagenAlbum.setAttribute('alt', fotoAleatoria.id);
    tarjetaFrontal.appendChild(imagenAlbum);

    //Creamos la tarjeta trasera
    let tarjetaTrasera = document.createElement('div');
    tarjetaTrasera.setAttribute('class', 'absolute w-full h-full bg-blue-500 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center p-4');
    let tituloAlbum = document.createElement('h1');
    tituloAlbum.setAttribute('class', 'text-xl font-bold mb-4 line-clamp-3');
    tituloAlbum.innerText = album.title;

    let autorAlbum = listaUsuarios.find(usuario => usuario.id == album.userId);
    let autor = document.createElement('p');
    autor.setAttribute('class', 'text-sm');
    autor.innerText = "Autor: " + autorAlbum.name;
    tarjetaTrasera.appendChild(tituloAlbum);
    tarjetaTrasera.appendChild(autor);
    //Añadimos las tarjetas al contenedor interior
    contenedorInterior.appendChild(tarjetaFrontal);
    contenedorInterior.appendChild(tarjetaTrasera);
    //Añadimos el contenedor interior a la tarjeta principal
    albumCard.appendChild(contenedorInterior);
    //Añadimos la tarjeta principal a la sección
    sectionCards.appendChild(albumCard);
 }

 currentIndex = endIndex;
}

let currentIndex = 0;
const batchSize = 10;

function loadMoreItems() {
 const nextIndex = currentIndex + batchSize;
 construirHTML(currentIndex, nextIndex);
}

window.addEventListener('scroll', () => {
 if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 200) {
    loadMoreItems();
 }
});

// Inicializar la carga de los primeros 10 elementos
construirHTML(0, batchSize);