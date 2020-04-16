@login
Feature: Login to address book

    Scenario: Check login to address book is success
        Given Launch the application
        Then click on sign in
        Then I enter credentials from data file "test1"
        Then I click on login
        Then I validate text in homePage
        Then I click on sign-out