import { App2GithubPage } from './app.po';

describe('app2-github App', () => {
  let page: App2GithubPage;

  beforeEach(() => {
    page = new App2GithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
