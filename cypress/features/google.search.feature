Feature: Google Search

    @smoke @e2e
    Scenario: Google Search "test"
        When I visit "google.ca"
        And I search keywords "test"
        Then keywords "test" presents in result

    @e2e
    Scenario: Google Search "cypress"
        When I visit "google.ca"
        And I search keywords "cypress"
        Then keywords "cypress" presents in result 

    @e2e
    Scenario: Google Search "samsung"
        When I visit "google.ca"
        And I search keywords "samsung"
        Then keywords "samsung" presents in result       