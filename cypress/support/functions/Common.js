/// <reference types="Cypress"/>
class Common {

   constructor() {

   }

   set_Value(field, value) {
      console.log("field is:" + field);
      cy.get(field.toString()).type(value)
   }

   select_Value(field, value) {
      cy.get(field).select(value)
   }

   click(field) {
         cy.get(field, {timeout: 7000}).should('have.length', 1).click()
   }

   assertText(field, value) {
      cy.get(field).should('have.text', value)
   }

   printText(field){
      cy.get(field).should(($div) => {
         const text = $div.val();
         cy.log("text is:"+text);
   });
}


}
export default Common;