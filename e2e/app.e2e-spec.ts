import { UsersProjectPage } from './app.po';

describe('users-project App', () => {
  let page: UsersProjectPage;

  beforeEach(() => {
    page = new UsersProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
