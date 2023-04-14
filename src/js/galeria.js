document.addEventListener('DOMContentLoaded', function(){
    iniciarApp();
});

function iniciarApp () {
    crearGaleria();
}

function crearGaleria () {
    const galeria = document.querySelector('.galeria-imagenes');

    for(let i = 1; i <= 12; i++) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.avif" type="img/avif">
            <source srcset="build/img/thumb/${i}.webp" type="img/webp">
            <img loading="lazy" width="200" height="300" src="build/img/thumb/${i}.jpg" alt="Imagen galeria">
            `;
            imagen.onclick = function () {
                mostrarImagen(i);
            }

            galeria.appendChild(imagen);
    }
}

function mostrarImagen(id) {
    const imagen = document.createElement('picture');
    imagen.innerHTML = `
        <source srcset="build/img/grande/${id}.avif" type="img/avif">
        <source srcset="build/img/grande/${id}.webp" type="img/webp">
        <img loading="lazy" width="200" height="300" src="build/img/grande/${id}.jpg" alt="Imagen galeria">
        `;

        // Crea el overlay con la imagen
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function () {
            const body = document.querySelector('body')
            body.classList.remove('fijar-body');
            overlay.remove();
        }

        // Boton para cerrar el modal
        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = 'X';
        cerrarModal.classList.add('btn-cerrar');
        cerrarModal.onclick = function (){
            const body = document.querySelector('body')
            body.classList.remove('fijar-body');
            overlay.remove();
        }
        overlay.appendChild(cerrarModal);

        // Lo agrega al html
        const body = document.querySelector('body')
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}