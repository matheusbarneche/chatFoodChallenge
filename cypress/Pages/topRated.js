/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class TopRated {
  clickOnSortArrowDown() {
    cy.get(':nth-child(1) > .filter > .k-widget > .k-dropdown-wrap > .k-select > .k-icon').click();
  }

  mouseOverDateAsceding() {
    cy.get('#media_v4 > div > div > div.content > div:nth-child(1) > div:nth-child(1) > div.filter > span > span').trigger('mouseover');
  }

  clickOnDateAsceding() {
    cy.get('#sort_by_listbox > [data-offset-index="5"]').click({ force: true });
  }

  clickOnTopRatepSearch() {
    cy.get(':nth-child(1) > .apply > p.load_more > .no_click').click();
  }

  clickOnFilterArrowDown() {
    cy.get(':nth-child(2) > .name > .glyphicons_v2').click();
  }

  chooseDocumentaryFilter() {
    cy.get('[data-value="99"]').click();
  }

  searchFilteredDocumentary() {
    cy.get('.full > p.load_more > .no_click').click({ force: true });
  }

  chooseFilteredFirstDocumentary() {
    cy.get(':nth-child(1) > .content > h2 > a').click({ force: true });
  }
}
