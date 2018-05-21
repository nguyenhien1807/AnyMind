import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getHeaderText() {
    return element(by.css('label.header')).getText();
  }

  getElementByCss(css) {
    return element(by.css(css));
  }

  getElementById(id) {
    return element(by.id(id));
  }
}
