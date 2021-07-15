const assert = require('assert');

Feature('Liking_Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.see('Favorite Restaurant', 'h1');
  I.see('Empty Favorite Restaurant', 'h3');
});

Scenario('Liking restaurant', async ({ I }) => {
  I.see('Empty Favorite Restaurant', 'h3');

  I.amOnPage('/');
  I.seeElement('.card-content a.link');

  const firstRestaurant = locate('.card-content a.link .card-title').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(locate('.card-content a.link').first());

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-content');
  const likedRestaurantTitle = await I.grabTextFrom('.card-content .card-title');
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking restaurant', async ({ I }) => {
  I.see('Empty Favorite Restaurant', 'h3');

  I.amOnPage('/');
  I.seeElement('.card-content a.link');

  const firstRestaurant = locate('.card-content a.link').first();
  I.click(firstRestaurant);

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card-content');

  I.click(firstRestaurant);

  I.seeElement('.favorite-button');
  I.click('.favorite-button');

  I.amOnPage('/#/favorite');
  I.see('Empty Favorite Restaurant', 'h3');
});
