import BestDeals from "../../src/components/BestDeals";

describe("BestDeals Component", () => {
  it("renders the BestDeals component", () => {
    cy.mount(<BestDeals />);
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
