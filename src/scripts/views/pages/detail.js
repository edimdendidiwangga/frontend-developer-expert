import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import TemplateCreator from '../templates/template-creator';

const Detail = {
  async render() {
    return `
        <div id="restaurant" class="container w-space pt-1"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantContainer = document.querySelector('#restaurant');

    try {
      const restaurant = await RestaurantSource.detailRestaurant(url.id);
      restaurantContainer.innerHTML = TemplateCreator.restaurantDetail(restaurant);
      const cardImage = document.querySelector('#picture-one');
      cardImage.innerHTML += TemplateCreator.likeRestaurantButton();
    } catch (error) {
      // console.log(`Error: ${error}`);
    }
  },
};

export default Detail;
