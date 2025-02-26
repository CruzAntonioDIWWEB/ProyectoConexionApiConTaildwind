import $ from 'jquery';

let currentIndex = 0;
const batchSize = 10;

function obtenerAlbums() {
    let listaCargada = localStorage.getItem('listaAlbumsJquery');

    if (!listaCargada) {
        let url = 'https://jsonplaceholder.typicode.com/albums';
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (response) {
            localStorage.setItem('listaAlbumsJquery', JSON.stringify(response));
            console.log('Álbumes cargados:', response);
        }).fail(function (error) {
            console.error('Error al cargar los álbumes:', error);
        });
    } else {
        console.log('No hace falta volver a cargar la petición');
        console.log('Álbumes en localStorage:', JSON.parse(listaCargada));
    }
}

function obternerUsuarios() {
    let listaCargada = localStorage.getItem('listaUsuariosJquery');

    if (!listaCargada) {
        let url = 'https://jsonplaceholder.typicode.com/users';
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (response) {
            localStorage.setItem('listaUsuariosJquery', JSON.stringify(response));
            console.log('Álbumes cargados:', response);
        }).fail(function (error) {
            console.error('Error al cargar los álbumes:', error);
        });
    } else {
        console.log('No hace falta volver a cargar la petición');
        console.log('Álbumes en localStorage:', JSON.parse(listaCargada));
    }
    
}

function obtenerFotos() {
    let listaCargada = localStorage.getItem('listaFotosJquery');
    if (!listaCargada) {
        let url = 'https://api.thecatapi.com/v1/images/search?limit=100&api_key=live_i99DweF5QsCH8LT0cxcX1uBPgiPupixOgqtt83VXfDXdViIrr9pCVt27GKSMmrPU'
        $.ajax({
            url: url,
            method: 'GET'
        }).done(function (response) {
            localStorage.setItem('listaFotosJquery', JSON.stringify(response));
            console.log('Fotos cargadas:', response);
        }).fail(function (error) {
            console.error('Error al cargar las fotos:', error);
        });
    } else {
        console.log('No hace falta volver a cargar la petición');
        console.log('Fotos en localStorage:', JSON.parse(listaCargada));
    }
}

async function construirHTML(startIndex, endIndex) {
    obtenerAlbums();
    obternerUsuarios();
    obtenerFotos();
 
    let $main = $('main');
    let $sectionCards = $('#sectionCards');
 
    // Si no existe la sección, la creamos y la añadimos al main
    if ($sectionCards.length === 0) {
       $sectionCards = $('<section>', {
          id: 'sectionCards',
          class: 'pt-[150px] pb-[150px] max-w-[1600px] mx-auto'
       });
       $main.append($sectionCards);
    }
 
    let listaAlbums = JSON.parse(localStorage.getItem('listaAlbumsJquery'));
    let listaUsuarios = JSON.parse(localStorage.getItem('listaUsuariosJquery'));
    let listaFotos = JSON.parse(localStorage.getItem('listaFotosJquery'));
 
    for (let i = startIndex; i < endIndex && i < listaAlbums.length; i++) {
       let album = listaAlbums[i];
 
       // Creamos el contenedor principal de la tarjeta
       let $albumCard = $('<div>', {
          class: 'group w-[300px] h-[300px] bg-transparent border border-[#f1f1f1] [perspective:1000px]'
       });
 
       // Contenedor interior giratorio
       let $contenedorInterior = $('<div>', {
          class: 'relative w-full h-full text-center transition-transform duration-[1000ms] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'
       });
 
       // Cogemos una foto aleatoria de este álbum
       let fotoAleatoria = listaFotos[Math.floor(Math.random() * listaFotos.length)];
 
       // Creamos la tarjeta frontal
       let $tarjetaFrontal = $('<div>', {
          class: 'absolute w-full h-full bg-[#bbbbbb] text-black [backface-visibility:hidden]'
       });
       let $imagenAlbum = $('<img>', {
          class: 'w-[300px] h-[300px]',
          src: fotoAleatoria.url,
          alt: fotoAleatoria.id
       });
       $tarjetaFrontal.append($imagenAlbum);
 
       // Creamos la tarjeta trasera
       let $tarjetaTrasera = $('<div>', {
          class: 'absolute w-full h-full bg-[#1e90ff] text-white [transform:rotateY(180deg)] [backface-visibility:hidden]'
       });
       let $tituloAlbum = $('<h1>').text(album.title);
 
       let autorAlbum = listaUsuarios.find(usuario => usuario.id == album.userId);
       let $autor = $('<p>').text("Autor: " + autorAlbum.name);
       $tarjetaTrasera.append($tituloAlbum).append($autor);
 
       // Añadimos las tarjetas al contenedor interior
       $contenedorInterior.append($tarjetaFrontal).append($tarjetaTrasera);
 
       // Añadimos el contenedor interior a la tarjeta principal
       $albumCard.append($contenedorInterior);
 
       // Añadimos la tarjeta principal a la sección
       $sectionCards.append($albumCard);
    }
 
    currentIndex = endIndex;
 }

 function loadMoreItems() {
    const nextIndex = currentIndex + batchSize;
    construirHTML(currentIndex, nextIndex);
 }
 
 $(window).on('scroll', function () {
    if ($(window).innerHeight() + $(window).scrollTop() >= $(document).height()) {
       loadMoreItems();
    }
 });

 construirHTML(0, batchSize);

