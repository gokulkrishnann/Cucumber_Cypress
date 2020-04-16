import '../commands'
class NewAddressPage {
    constructor() {

    }

    enter_NameDetails(firstname, lastname) {
        cy.set_Value("[id='address_first_name']", firstname);
        cy.set_Value("[id='address_last_name']", lastname);

    }

    enter_AddressDetails(address1, address2, city, State, Zipcode, Country) {
        cy.set_Value("[id='address_street_address']", address1);
        cy.set_Value("[id='address_secondary_address']", address2);
        cy.set_Value("[id='address_city']", city);
        cy.select_Value("[id='address_state']", State);
        cy.set_Value("[id='address_zip_code']", Zipcode);
        cy.clickField("[id='address_country_" + Country.toLowerCase() + "']");
    }

    enter_PersonalInformation(birthdate,age,website,phone){
        cy.set_Value("[id='address_birthday']",birthdate)
        cy.set_Value("[id='address_age']",age)
        cy.set_Value("[id='address_website']",website)
        cy.set_Value("[id='address_phone']",phone) 
    }

    select_CommonInterests(interest){
        interestsList=interests.split(",")
        interestsList.forEach(
            interest=>{
                if(interest.localeCompare("climb")==0){
                    cy.clickField("[id='address_interest_climb']");
                }
                else if(interest.localeCompare("dance")==0){
                    cy.clickField("[id='address_interest_dance']");
                }
                else if(interest.localeCompare("read")==0){
                    cy.clickField("[id='address_interest_read']");
                }

            }
        )
       
    }
//https://github.com/cypress-io/cypress/issues/170#issuecomment-566700991
//https://www.npmjs.com/package/cypress-file-upload
    chooseFile(){
        const fileName = 'test2.json';
 
        cy.fixture(fileName).then(fileContent => {
          cy.get('[id="address_picture"]').upload({ fileContent, fileName, mimeType: 'application/json' });
        });

    }
    submitAddress(){
        cy.clickField("[type='submit']");
    }

}
export default NewAddressPage;