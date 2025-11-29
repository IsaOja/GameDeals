import SearchGame from "../../src/components/SearchGame";

describe("SearchGame Component", () => {
  it("renders the SearchGame component", () => {
    cy.mount(<SearchGame />);
    cy.get('input[data-testid="search-input"]').should("be.visible");
    cy.get('[data-testid="search-button"]').should("be.visible");
    cy.get('input[data-testid="search-input"]').type("Half Life");
    cy.get('[data-testid="search-button"]').click();
    cy.get('[data-testid="games-list"]').should("be.visible");
    cy.get('[data-testid="game-items"]')
      .first()
      .should("be.visible")
      .within(() => {
        cy.get('[data-testid="game-thumb"]').should("be.visible");
        cy.get('[data-testid="game-title"]').should("be.visible");
        cy.get('[data-testid="game-price"]').should("be.visible");
        cy.get('[data-testid="game-store"]').should("be.visible");
      });
    cy.get('[data-testid="games-list"]')
      .find('[data-testid="game-items"]')
      .its("length")
      .should("be.gte", 0);
  });
});
