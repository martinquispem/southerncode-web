

Feature: DuckDuckGo Website

  Scenario: As a user, I can search Michael Jordan
    Given I am on the homePage
    When I search Michael Jordan
    Then I should see a displayed picture of Michael Jordan
    Then I should see at least one Wikipedia page result
    Then I should see at least one Nba page result

  Scenario: As a user, I can change the theme of the Website
    Given I am on the homePage
    When I go to the themePage
    When I change the theme to Terminal
    When I search Michael Jordan
    Then I verify the background color has changed

  Scenario: As a user, I can change the language of the Website

    Given I am on the homePage
    When I go to the settingsPage
    When I change the language to bosanski
    Then I verify the language label has been changed by bosanski