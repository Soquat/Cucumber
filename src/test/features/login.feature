Feature: The user wants to login to the application

    Background:
        Given User navigates to the application
        And User click on the login link

    Scenario: As a user with valid credentials I want to login to the application
        And User enter the username as "ortoni"
        And User enter the password as "Pass1234"
        When User click on the login button
        Then Login should be success

    Scenario: As a user with invalid credentials I want to get a failed login
        Given User enter the username as "koushik"
        Given User enter the password as "Passkoushik"
        When User click on the login button
        But Login should fail