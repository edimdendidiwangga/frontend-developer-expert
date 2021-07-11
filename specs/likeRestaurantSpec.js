import { initButton, restaurantTestingData, createFavoriteButton, FavoriteRestaurant } from './helper';

describe('Liking A Restaurant', () => {
  beforeEach(async () => {
    createFavoriteButton();
  });

  it('Should show the like button when the restaurant has not been liked', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Like this Restaurant"]')).toBeTruthy();
  });

  it('Should not show the unlike button when the restaurant has not been liked', async () => {
    await initButton(restaurantTestingData);

    expect(document.querySelector('[aria-label="Unlike this Restaurant"]')).toBeFalsy();
  });

  it('Should be able to like the restaurant', async () => {
    await initButton(restaurantTestingData);

    document.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurant.getRestaurant(restaurantTestingData.id);

    expect(restaurant).toEqual(restaurantTestingData);
    await FavoriteRestaurant.deleteRestaurant(restaurantTestingData.id);
  });

  it('Should not add a restaurant again when its already liked', async () => {
    await initButton(restaurantTestingData);
    await FavoriteRestaurant.putRestaurant(restaurantTestingData);

    document.querySelector('.favorite-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([restaurantTestingData]);
    await FavoriteRestaurant.deleteRestaurant(restaurantTestingData.id);
  });

  it('Should not add a restaurant if it has no id', async () => {
    await initButton({});

    document.querySelector('.favorite-button').dispatchEvent(new Event('click'));
    expect(await FavoriteRestaurant.getAllRestaurants()).toEqual([]);
  });
});
