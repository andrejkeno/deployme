import { DeploymePage } from './app.po';

describe('deployme App', function() {
  let page: DeploymePage;

  beforeEach(() => {
    page = new DeploymePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('dep works!');
  });
});
