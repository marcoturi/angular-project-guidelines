import { AngularProjectGuidelinesPage } from './app.po';

describe('angular-project-guidelines App', () => {
  let page: AngularProjectGuidelinesPage;

  beforeEach(() => {
    page = new AngularProjectGuidelinesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
