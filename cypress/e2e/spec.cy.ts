describe("Game Deals Tests", () => {
  it("Best Deals page loads", () => {
    cy.visit("http://localhost:4000/");
    cy.contains("Best Deals").click();
    cy.url().should("include", "/bestdeals");
    cy.contains('[data-testid="games-header"] h2', "Thumbnail");
    cy.contains('[data-testid="games-header"] h2', "Title");
    cy.contains('[data-testid="games-header"] h2', "Price");
    cy.contains('[data-testid="games-header"] h2', "Store");
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
  it("Search Games page loads and functions", () => {
    cy.visit("http://localhost:4000/");
    cy.contains("Search Games").click();
    cy.url().should("include", "/searchgame");
    cy.get('input[data-testid="search-input"]')
      .should("be.visible")
      .type("Half Life");
    cy.get('[data-testid="search-button"]').should("be.visible").click();
    cy.get('[data-testid="games-list"]').should("be.visible");
    cy.get('[data-testid="games-list"]')
      .find('[data-testid="game-items"]')
      .its("length")
      .should("be.gte", 0);
  });
});
