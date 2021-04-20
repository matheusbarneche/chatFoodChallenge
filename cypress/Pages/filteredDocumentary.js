/* eslint-disable comma-dangle */
/* eslint-disable quotes */
/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
export class FilteredDocumentary {
  barScrollerMediaArrowDownMouseOver() {
    cy.get(
      // eslint-disable-next-line comma-dangle
      "#new_shortcut_bar > :nth-child(2) > :nth-child(1) > .k-menu-expand-arrow"
    ).trigger("mouseover");
  }

  barScrollerMediaVideosMouseOver() {
    cy.get(
      '.k-animation-container > .media > [aria-haspopup="true"] > span.k-link'
    ).trigger("mouseover");
  }

  barScrollerVideoValueValidate() {
    cy.get(
      ".k-item.k-state-border-right > .k-animation-container > .number_group"
    ).should("have.value", "");
  }

  pageMediaSectionVideos() {
    cy.get("#videos").click();
  }

  pageMediaSectionVideoValueValidate() {
    cy.get(".media > .menu > ul > .active").should("have.value", 0);
  }
}
