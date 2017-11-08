import { CodeShipDemoPage } from './app.po';

describe('code-ship-demo App', () => {
  let page: CodeShipDemoPage;

  beforeEach(() => {
    page = new CodeShipDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
