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
                <a href="#/detail/${restaurant.id}">
                    <h4 class="card-title">${restaurant.name || '-'}</h4>
                </a>
                <p class="elipsis">${restaurant.description}</p>                
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

  restaurantDetail(restaurant) {
    return `
        <div class="card">
            <div class="card-img">
                <button type="button" class="favorite-button"></button>
                <img class="img-lg" src="${API_ENDPOINT.IMAGE(restaurant.pictureId, 'large')}" alt="${restaurant.name}" />
            </div>
            <div class="card-content">
                <h2 class="card-title">${restaurant.name}</h2>
                <p>${restaurant.description}</p>
                <div class="flex-row-between align-center">
                    <div class="rate">
                        <img src="images/icon/star.svg" alt="rating">
                        <span>
                            ${restaurant.rating}
                        </span>
                    </div>
                    <p class="address">${restaurant.address}, ${restaurant.city}</p>
                </div>
                
                <hr class="style-one" />
                <h3 class="card-title text-center">Kategori Menu</h3>
                <ul class="tags center">
                    ${restaurant.categories.map((category) => `<li class="tag-item">${category.name}</li>`).join('')}
                </ul>

                <hr class="style-one" />
                <div class="flex-row-between">
                    <div class="list-container">
                        <h3 class="card-title text-center">Drinks</h3>
                        <ul class="list-group">
                            ${restaurant.menus.drinks.map((menu) => `<li class="list-group-item">${menu.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="list-container">
                        <h3 class="card-title text-center">Foods</h3>
                        <ul class="list-group">
                            ${restaurant.menus.foods.map((menu) => `<li class="list-group-item">${menu.name}</li>`).join('')}
                        </ul>
                    </div>
                </div>

                <hr class="style-one" />
                <h3 class="card-title text-center">Reviews</h3>
                <div class="review-container">
                    ${restaurant.customerReviews.map((review) => (`
                        <div class="review-item">
                            <img class="i-user" src="images/icon/user.svg" alt="rating">
                            <div class="review-content">
                                <p class="review-name">${review.name}</p>
                                <p class="review-text">${review.review}</p>
                                <p class="review-date">${review.date}</p>
                            </div>
                        </div>
                    `)).join('')}
                </div>
            </div>
        </div>
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

  likeRestaurantButton() {
    return `
        <svg class="heart" viewBox="0 0 32 29.6">
            <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
            c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
        </svg> 
    `;
  },

  empty(msg) {
    return `
        <div class="centering empty-container">
            <h3 class="text-center">${msg}</h3>
        </div>
    `;
  },
};

export default TemplateCreator;
