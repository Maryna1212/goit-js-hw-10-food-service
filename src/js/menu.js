import createMarkup from '../templates/menu.hbs';
import menu from '../menu.json';

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', createMarkup(menu));