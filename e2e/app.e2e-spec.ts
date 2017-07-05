import { TestMintyMintPage } from './app.po';

describe('test-minty-mint App', () => {
  let page: TestMintyMintPage;

  beforeEach(() => {
    page = new TestMintyMintPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
