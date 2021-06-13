import RestaurantSource from '../../data/restaurant-source';
import TemplateCreator from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="hero" id="jumbotron"></section>
        <section id="main-content" class="main-content">
            <h1 class="title">Explore Restaurant</h1>
            <restaurant-list class="grid-wrapper container"></restaurant-list>
        </section>
    `;
  },

  async afterRender() {
    try {
      const jumbotron = document.querySelector('#jumbotron');
      jumbotron.innerHTML = TemplateCreator.jumbotronBanner();

      const listRestaurants = await RestaurantSource.listRestaurant();
      const restaurantListElement = document.querySelector('restaurant-list');
      restaurantListElement.innerHTML = '';
      listRestaurants.forEach((restaurant) => {
        restaurantListElement.innerHTML += TemplateCreator.restaurantItem(restaurant);
      });
    } catch (error) {
      // console.log(`Error: ${error}`);
    }
  },
};

export default Home;
