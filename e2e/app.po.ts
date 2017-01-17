import { browser, element, by } from 'protractor';

export class DeploymePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dep-root h1')).getText();
  }
}
