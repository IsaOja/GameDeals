Feature: Find Deals

Scenario: Show the best deals
  Given The user is on the Best Deals page
  When The Best Deals page should display the games list
  Then Each game item should display thumbnail, title, price, and store
