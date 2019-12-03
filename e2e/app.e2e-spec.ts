import { WalkingPage } from './app.po';

describe('walking App', function() {
  let page: WalkingPage;

  beforeEach(() => {
    page = new WalkingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
