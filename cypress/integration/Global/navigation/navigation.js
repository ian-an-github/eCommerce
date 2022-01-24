context("Login", () => {

  beforeEach(function() {
      cy.visit('https://identity-dev.wuxiaworld.com/Account/Login')

      cy.fixture('logindata').then(function(dataJson)
      {
          this.dataJson=dataJson;
          testUser = this.dataJson.regularUser
          cy.wrap(testUser)
      })
  })

//Set an array of sizes
const sizes = ['iphone-6', 'ipad-2'];
//Set an array of URL's
const urls = ['https://docs.cypress.io', 'https://www.cypress.io'];
describe('Find the logo on mobile and tablet for 2 different sites', () => 
{
  //for each URL do the thing in here
  urls.forEach(url => 
    {
    //This gives you some feedback in the Cypress side bar console on what URL you're at
      describe(`url: ${url}`, () => 
      {
      //The nested loop meaning that for each URL you go to we will also go into another loop and use each size as well.
      sizes.forEach(size => 
        {
          it(`Should display logo on ${url}`, () => 
          {
            //uses the URL alias above
            cy.visit(url);
            //use the size alias above
            cy.viewport(size);
            //test from a Cypress example for using a for each loop (but not a nested one)
            cy.get('#logo img')
            .should('have.attr', 'src')
            .and('include', 'logo');
            cy.percySnapshot();
          });
        });
      });
    });
  });
  /*
  describe('Verify "Login" is visible', function() {
    it('finds the Login link in the header', function() {
      var i = 0;
      for (i = 0; i < 5 ; i++) { 
        //Place code inside the loop that you want to repeat
        cy.visit('https://www.example.com/page1')
        cy.get('.navbar').contains('Login').should('be.visible')
        cy.visit('https://www.example.com/page2')
        cy.get('.navbar').contains('Login').should('be.visible')
      }      
    })
  });*/
})
  
  