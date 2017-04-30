import { browser, element, by } from 'protractor';

export class ChildrenAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gu-root h1')).getText();
  }
}
