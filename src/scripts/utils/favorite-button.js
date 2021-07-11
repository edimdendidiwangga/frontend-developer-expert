class FavoriteButton {
  async init({ restaurant, FavoriteRestaurant }) {
    this._restaurant = restaurant;
    this._FavoriteRestaurant = FavoriteRestaurant;
    this._button = await document.querySelector('.favorite-button');
    this.favorited = await this._checkButton();
    this._initButton();
  }

  _initButton() {
    this._button.addEventListener('click', async (event) => {
      event.preventDefault();
      if (this.favorited) {
        await this._unfavorite();
      } else {
        await this._favorite();
      }
    });
  }

  async _checkButton() {
    const status = await this._isFavorited();

    if (status) {
      this._showFavoriteButton();
    } else {
      this._showUnfavoriteButton();
    }
    return !!status;
  }

  async _isFavorited() {
    const check = await this._FavoriteRestaurant.getRestaurant(this._restaurant.id);
    return check;
  }

  async _favorite() {
    const favorited = await this._FavoriteRestaurant.putRestaurant(this._restaurant);
    if (favorited) {
      this._showUnfavoriteButton();
    }
    this.init({ restaurant: this._restaurant, FavoriteRestaurant: this._FavoriteRestaurant });
  }

  async _unfavorite() {
    await this._FavoriteRestaurant.deleteRestaurant(this._restaurant.id);
    this._showFavoriteButton();
    this.init({ restaurant: this._restaurant, FavoriteRestaurant: this._FavoriteRestaurant });
  }

  _showUnfavoriteButton() {
    this._button.className = 'favorite-button unfavorited';
    this._button.setAttribute('aria-label', 'Like this Restaurant');
  }

  _showFavoriteButton() {
    this._button.className = 'favorite-button favorited';
    this._button.setAttribute('aria-label', 'Unlike this Restaurant');
  }
}

export default FavoriteButton;
