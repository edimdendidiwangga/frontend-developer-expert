import { createFavoriteButton, initButton, restaurantTestingData, FavoriteRestaurant } from './helper';

describe('Unliking a restaurant', () => {
  beforeEach(async () => {
    createFavoriteButton();
    await FavoriteRestaurant.putRestaurant(restaurantTestingData);
  });

  afterEach(async () => {
    await FavoriteRestaurant.deleteRestaurant(restaurantTestingData.id);
  });

  it('Should display unlike button when the restaurant has been liked', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Unlike this Restaurant"]')).toBeTruthy();
  });

  it('Should not show like button when the restaurant has been liked', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Like this Restaurant"]')).toBeFalsy();
  });

  it('Should be able to remove restaurant from list', async () => {
    await initButton(restaurantTestingData);
    document.querySelector('[aria-label="Unlike this Restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('Should not throw error if the deleted restaurant is not in the list', async () => {
    await initButton(restaurantTestingData);
    await FavoriteRestaurant.deleteRestaurant(restaurantTestingData.id);

    document.querySelector('[aria-label="Unlike this Restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
