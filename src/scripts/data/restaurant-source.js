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

  static async picture(size, pictureId) {
    try {
      const response = await fetch(API_ENDPOINT.IMAGE(size, pictureId));
      return response.url;
    } catch (error) {
      return 'images/heros/hero-image_4-small.jpg';
    }
  }
}

export default RestaurantSource;
