Feature: Login Feature

    Feature Description
    Background:

    Scenario: Login with user
        Given I m on login page
        When I login with a dafault user
        Then I should be on Flight finder page
