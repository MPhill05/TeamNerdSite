import { TeamNerdPage } from './app.po';

describe('team-nerd App', () => {
  let page: TeamNerdPage;

  beforeEach(() => {
    page = new TeamNerdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
