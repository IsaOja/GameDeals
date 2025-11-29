import SearchGame from "../../src/components/SearchGame";

describe("SearchGame Component", () => {
  it("renders the SearchGame component", () => {
    cy.mount(<SearchGame />);
    cy.get('input[data-testid="search-input"]').should("be.visible");
    cy.get('[data-testid="search-button"]').should("be.visible");
    cy.get('input[data-testid="search-input"]').type("Half Life");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="games-list"]').should("be.visible");
    cy.get('[data-testid="game-items"]').its("length").should("be.gte", 0);
  });
});
