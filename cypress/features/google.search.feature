Feature: Google Search

    @smoke @e2e
    Scenario: Google Search "test"
        When I visit "google.ca"
        Then I search keywords "test"

    @e2e
    Scenario: Google Search "cypress"
        When I visit "google.ca"
        Then I search keywords "cypress"    

    @e2e
    Scenario: Google Search "samsung"
        When I visit "google.ca"
        Then I search keywords "samsung"        