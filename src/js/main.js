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
 sectionCards.setAttribute('class', 'pt-[150px] pb-[150px] max-w-[1600px] mx-auto ');

 if (!document.getElementById('sectionCards')) {
    main.appendChild(sectionCards);
 }

 let listaAlbums = JSON.parse(localStorage.getItem('listaAlbums'));
 let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuarios'));
 let listaFotos = JSON.parse(localStorage.getItem('listaFotos'));

 for (let i = startIndex; i < endIndex && i < listaAlbums.length; i++) {
    let album = listaAlbums[i];

    //Creamos el contenedor principal de la tarjeta 
    let albumCard = document.createElement('div'); 
    albumCard.setAttribute('class', 'group w-[300px] h-[300px] bg-transparent border border-[#f1f1f1] [perspective:1000px]');
    
    //Contenedor Interior Giratorio
    let contenedorInterior = document.createElement('div');
    contenedorInterior.setAttribute('class', 'relative w-full h-full text-center transition-transform duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]');
    
    //Cogemos una de las fotos de forma aleatoria de este album
    let fotoAleatoria = listaFotos[Math.floor(Math.random() * listaFotos.length)];
    
    //Creamos la tarjeta frontal
    let tarjetaFrontal = document.createElement('div');
    tarjetaFrontal.setAttribute('class', 'absolute w-full h-full bg-[#bbbbbb] text-black [backface-visibility:hidden]');
    let imagenAlbum = document.createElement('img');
    imagenAlbum.setAttribute('class', 'w-[300px] h-[300px]');
    imagenAlbum.setAttribute('src', fotoAleatoria.url);
    imagenAlbum.setAttribute('alt', fotoAleatoria.id);
    tarjetaFrontal.appendChild(imagenAlbum);

    //Creamos la tarjeta trasera
    let tarjetaTrasera = document.createElement('div');
    tarjetaTrasera.setAttribute('class', 'absolute w-full h-full bg-[#1e90ff] text-white [transform:rotateY(180deg)] [backface-visibility:hidden]');
    let tituloAlbum = document.createElement('h1');
    tituloAlbum.innerText = album.title;

    let autorAlbum = listaUsuarios.find(usuario => usuario.id == album.userId);
    let autor = document.createElement('p');
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
 if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadMoreItems();
 }
});

// Inicializar la carga de los primeros 10 elementos

construirHTML(0, batchSize);
