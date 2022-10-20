// Add imports above this line
import { galleryItems } from './gallery-items';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

// console.log(galleryItems);
const getItems = document.querySelector('.gallery');

function onMarkUpImages (items) {
    return items.map(item => `<li class="gallery__item"><a class="gallery__link" href="${item.original}"/><img class="gallery__image" src="${item.preview}" alt="${item.description}"/></li>`).join('');
};

const callFunc = onMarkUpImages(galleryItems);
getItems.innerHTML = callFunc;

//============================================================

getItems.addEventListener('click', onMarkUpGallery);

function onMarkUpGallery (event) {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
        return;
    };
};
const lightbox =  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);