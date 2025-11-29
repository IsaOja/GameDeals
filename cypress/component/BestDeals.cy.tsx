import BestDeals from "../../src/components/BestDeals";

describe("BestDeals Component", () => {
  it("renders the BestDeals component", () => {
    cy.mount(<BestDeals />);
    cy.get('[data-testid="games-list"]').should("be.visible");
    cy.get('[data-testid="game-items"]').its("length").should("be.gte", 0);
  });
});
