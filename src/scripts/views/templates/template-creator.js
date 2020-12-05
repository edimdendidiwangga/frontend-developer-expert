import API_ENDPOINT from '../../globals/api-endpoint';

const TemplateCreator = {
  restaurantItem(restaurant) {
    return `
        <article class="card" tabindex="0">
            <div class="card-img">
                <img src="${API_ENDPOINT.IMAGE(restaurant.pictureId, 'small')}" alt="${restaurant.name || '-'}">
                <div class="card-label">
                    ${restaurant.city}
                </div
            </div>
            <div class="card-content">
                <a class="name" href="/restaurant/:id${restaurant.id}">
                    <h4>${restaurant.name || '-'}</h4>
                </a>
                <p>${restaurant.description}</p>                
                <div class="rate">
                    <img src="images/icon/star.svg" alt="rating">
                    <span>
                        ${restaurant.rating}
                    </span>
                </div>
            </div>
        </article>
    `;
  },

  jumbotronBanner() {
    return `
        <img src="images/heros/hero-image_4.jpg" alt="jumbotron">
        <div class="overlay"></div>
        <div class="hero_inner">
            <h1 class="hero_title">FoodMon Go Apps</h1>
            <p class="hero_tagline">Hallo! This website provides various restaurants from various regions.</p>
        </div>
    `;
  },
};

export default TemplateCreator;
