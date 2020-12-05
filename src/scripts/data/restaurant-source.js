import CONFIG from '../globals/config';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantSource {
  static async listRestaurant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async addReviewRestaurant(data) {
    const response = await fetch(API_ENDPOINT.POST_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson;
  }

  static async picture(size, pictureId) {
    try {
      const response = await fetch(API_ENDPOINT.IMAGE(size, pictureId));
      return response.url;
    } catch (error) {
      return 'images/heros/hero-image_2.jpg';
    }
  }
}

export default RestaurantSource;
