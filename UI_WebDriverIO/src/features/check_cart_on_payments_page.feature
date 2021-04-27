Feature: As a user I should be able to go to payments page

  Scenario: check adult, child and price in cart on payment page

   Given I am on "All inclusive" page
    When I add "1" "Adult" passes
    And I add "1" "Child" passes
    Then I checkout my basket
    And I will be presented with review page
    Then I should match "1" adult and "1" child pass in the cart
    When I click on calendar button
    And select todays date
    And click on continue payment button
    And I will be presented with payment page
    Then I should see "Qty: 1" adult and "Qty: 1" child pass in the cart
  