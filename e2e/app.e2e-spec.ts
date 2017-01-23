import { BeerissimoPage } from './app.po';

describe('beerissimo App', function() {
  let page: BeerissimoPage;

  beforeEach(() => {
    page = new BeerissimoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
