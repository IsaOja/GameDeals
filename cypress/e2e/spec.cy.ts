describe("Game Deals Tests", () => {
  it("Best Deals page loads", () => {
    cy.visit("http://localhost:4000/");
    cy.contains("Best Deals").click();
    cy.url().should("include", "/bestdeals");
    cy.contains('[data-testid="games-header"] h2', "Thumbnail");
    cy.contains('[data-testid="games-header"] h2', "Title");
    cy.contains('[data-testid="games-header"] h2', "Price");
    cy.contains('[data-testid="games-header"] h2', "Store");
    cy.wait(2000);
    cy.contains('[data-testid="games-list"] [data-testId="game-items"]');
    cy.contains('[data-testid="games-items"] [data-testid="game-thumb"]');
    cy.contains('[data-testid="games-items"] [data-testid="game-title"]');
    cy.contains('[data-testid="games-items"] [data-testid="game-price"]');
    cy.contains('[data-testid="games-items"] [data-testid="game-store"]');
  });
});
