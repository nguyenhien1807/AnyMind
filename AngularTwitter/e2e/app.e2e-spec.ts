import { AppPage } from './app.po';
import {browser, by, element, protractor} from 'protractor';

describe('angular-twitter App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Angular Twitter as title', () => {
    page.navigateTo();
    expect(page.getHeaderText()).toEqual('Angular Twitter');
  });

  it('should have displayed tab', () => {
    expect(page.getElementByCss('a').isDisplayed()).toBeTruthy('tab should be displayed');
  });

  it('enter text and do searching', () => {
    const searchTextField = page.getElementByCss('input.form-control');
    searchTextField.click();
    searchTextField.sendKeys('python');
    searchTextField.sendKeys(protractor.Key.ENTER);
    expect(searchTextField.getAttribute('value')).toBe('python');

    const EC = protractor.ExpectedConditions;
    const loadingIcon = page.getElementById('loadingIcon');

    browser.wait(EC.presenceOf(loadingIcon), 10000);
  });
});
