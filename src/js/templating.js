import itemsTemplate from '../templates/gallery-items.hbs';
import menulist from '../menu.json';

const markup = itemsTemplate(menulist);

const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);
