Feature: Most Read Section

  Scenario: Verify "Most Read" section is visible on Desktop
    Given I am on the 'home' page 
    When I am using a Desktop view
    Then the "Most Read" section should be visible

  Scenario: Verify "Most Read" section contains 10 posts on Desktop
    Given I am on the 'home' page 
    When I am using a Desktop view
    Then the "Most Read" section should contain 10 posts

  Scenario: Verify "Most Read" section is not visible on Mobile
    Given I am on the 'home' page 
    When I am using a Mobile view
    Then the "Most Read" section should not be visible

  Scenario: Verify bypass block menu for "Most Read" is working
    Given I am on the 'home' page 
    When I click the "Bypass Block" menu item for "Most Read"
    Then I should be taken directly to the "Most Read" section