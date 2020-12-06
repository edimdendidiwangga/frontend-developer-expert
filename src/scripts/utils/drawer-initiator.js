const DrawerInitiator = {
  init({
    buttonOpen, drawer, buttonClose, content,
  }) {
    buttonOpen.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    buttonClose.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('slide');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('slide');
  },
};

export default DrawerInitiator;
