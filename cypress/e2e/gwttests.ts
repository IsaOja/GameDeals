import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("The user is on the Best Deals page", () => {
  cy.visit("http://localhost:4000/");
  cy.contains("Best Deals").click();
  cy.url().should("include", "/bestdeals");
});

When("The Best Deals page should display the games list", () => {
  cy.contains('[data-testid="games-header"] h2', "Thumbnail");
  cy.contains('[data-testid="games-header"] h2', "Title");
  cy.contains('[data-testid="games-header"] h2', "Price");
  cy.contains('[data-testid="games-header"] h2', "Store");
  cy.get('[data-testid="games-list"]').should("be.visible");
});

Then("Each game item should display thumbnail, title, price, and store", () => {
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
