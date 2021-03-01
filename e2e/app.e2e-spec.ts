import { PrimerClasePage } from './app.po';

describe('primer-clase App', function() {
  let page: PrimerClasePage;

  beforeEach(() => {
    page = new PrimerClasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
