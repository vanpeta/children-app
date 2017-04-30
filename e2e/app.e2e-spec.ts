import { ChildrenAppPage } from './app.po';

describe('children-app App', () => {
  let page: ChildrenAppPage;

  beforeEach(() => {
    page = new ChildrenAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gu works!');
  });
});
