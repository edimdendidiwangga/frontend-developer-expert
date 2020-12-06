import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    buttonOpenNav, buttonCloseNav, drawer, content,
  }) {
    this._content = content;
    this._drawer = drawer;
    this._buttonOpenNav = buttonOpenNav;
    this._buttonCloseNav = buttonCloseNav;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      buttonOpen: this._buttonOpenNav,
      buttonClose: this._buttonCloseNav,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render(url);
    await page.afterRender();
  }
}

export default App;
