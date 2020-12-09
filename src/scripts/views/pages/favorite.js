import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import TemplateCreator from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <section class="main-content">
        <h1 class="title">Favorite Restaurant</h1>
        <favorite-restaurant-list class="grid-wrapper container"></favorite-restaurant-list>
      </section>
    `;
  },

  async afterRender() {
    const favorites = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('favorite-restaurant-list');
    if (favorites.length) {
      container.innerHTML = '';
      favorites.forEach((restaurant) => {
        container.innerHTML += TemplateCreator.restaurantItem(restaurant);
      });
    } else {
      container.className = 'container';
      container.innerHTML = TemplateCreator.empty('Empty Favorite Restaurant');
    }
  },
};

export default Favorite;
