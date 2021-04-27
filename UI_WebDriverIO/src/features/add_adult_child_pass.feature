Feature: As a user I should be able to add tickets to my basket

  Scenario: add adult and child tickets

    Given I am on "All inclusive" page
    When I add "1" "Adult" passes
    And I add "1" "Child" passes
    Then I checkout my basket
    And I will be presented with review page
    Then I should match "1" adult and "1" child pass in the cart

  # Scenario: verify cart on payments page

  #   When I click on calendar button
  #   And select todays date
  #   And click on continue payment button
  #   And I will be presented with payment page
  #   Then I should match "1" adult and "1" child pass in the cart