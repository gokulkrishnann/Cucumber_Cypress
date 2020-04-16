/// <reference types="Cypress"/>
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"
import HomePage from '../pages/HomePage'
import NewAddressPage from '../pages/NewAddressPage'

const homePage = new HomePage();
const newAddressPage = new NewAddressPage();


Then("I click on {string} link", (linkname) => {
  homePage.click_Link(linkname);
})

When("I enter name details", dataTable => {
  const rawTable = dataTable.rawTable.slice();
  for (let j = 1; j < rawTable.length; j++) {
    const row = rawTable[j];
    console.log(row[0]);
    console.log(row[1]);
    newAddressPage.enter_NameDetails(row[0], row[1]);
  }
})

When("I enter new address details", dataTable => {
  const rawTable= dataTable.rawTable.slice(1);
  for (let j = 0; j < rawTable.length; j++) {
    const row = rawTable[j];  
  newAddressPage.enter_AddressDetails(row[0], row[1], row[2], row[3], row[4], row[5]);
  }

  Then("I choose file", () => {
    newAddressPage.chooseFile();
  })
  

})