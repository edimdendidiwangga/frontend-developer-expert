import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

// Sidebar
const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.close-menu');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('slide');
  setTimeout(() => {
    menuClose.style.display = 'flex';
  }, 500);
});

menuClose.addEventListener('click', () => {
  nav.classList.toggle('slide');
  menuClose.style.display = 'none';
});

// List Content
const restaurantListElement = document.querySelector('restaurant-list');

restaurantListElement.setAttribute('class', 'grid-wrapper container');
restaurantListElement.innerHTML = '';
data.restaurants.forEach((restaurant) => {
  const list = document.createElement('article');
  list.className = 'card';
  list.setAttribute('tabindex', '0');
  list.innerHTML = `
        <div class="card-img">
            <img src=${restaurant.pictureId} alt="Poster">
            <div class="card-label">
                ${restaurant.city}
            </div
        </div>
        <div class="card-content">
            <h3>${restaurant.name}</h3>
            <p>${restaurant.description}</p>                
            <div class="rate">
                <img src="images/icon/star.svg" alt="rating">
                <span>
                    ${restaurant.rating}
                </span>
            </div>
        </div>
    `;
  restaurantListElement.appendChild(list);
});
