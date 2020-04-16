/// <reference types="Cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import LandingPage from '../pages/LandingPage'

const landingPage = new LandingPage();
const loginPage = new LoginPage();
const homePage = new HomePage();

Given(`Launch the application`, () => {
    cy.visit(Cypress.env('landingpage'));
})

Then(`click on sign in`, () => {
    landingPage.click_Item("sign-in");
})

Then(`I enter credentials from data file {string}`, (dataFile) => {
    cy.fixture(dataFile).then((inputdata => {
        loginPage.enter_Credentials(inputdata.username, inputdata.password);
    })
    );

})

Then(`I click on login`, () => {
    loginPage.clickLogin();
})

Then(`I validate text in homePage`, () => {
    cy.fixture("test1").then((inputdata => {
        homePage.validate_StaticText(inputdata.validation1);
    })
    );
})

Then(`I click on sign-out`, () => {
    homePage.click_Link("sign-out");
})

