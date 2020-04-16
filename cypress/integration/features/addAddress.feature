 @address
Feature: Add Address to address book

   
    Scenario: Add Address with all the required details
        Given Launch the application
        Then click on sign in
        Then I enter credentials from data file "test1"
        Then I click on login
        Then I click on "addresses" link
        Then I click on "create" link
        When I enter name details
            | firstname | lastname |
            | earth     | mars     |
        When I enter new address details
            | address1 | address2 | city   | state | zipcode | country |
            | 131      | 2323     | Berlin | LA    | 2323    | canada  |
        Then I choose file
        Then I click on "sign-out" link