import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import TemplateCreator from '../templates/template-creator';
import FavoriteButton from '../../utils/favorite-button';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="container w-space pt-1"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');

    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    restaurantContainer.innerHTML = TemplateCreator.restaurantDetail(restaurant);

    const favoriteButon = document.querySelector('.favorite-button');
    favoriteButon.innerHTML += TemplateCreator.likeRestaurantButton();
    new FavoriteButton().init({
      restaurant,
      FavoriteRestaurant: FavoriteRestaurantIdb,
    });
  },
};

export default Detail;
