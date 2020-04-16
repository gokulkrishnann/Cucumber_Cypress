before(() => {
  cy.log(
    "This will run once before all tests, you can use this to for example start up your server, if that's your thing"
  );
  cy.on('uncaught:exception', (err) => {
    // expect(err.message).to.include('Ignoring error for now');
     return false;
   });
});
