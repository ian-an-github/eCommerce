context("Login", () => {
  beforeEach(() => {
    cy.setsession()

    cy.fixture('pages').then(function(pages)
    {
        this.pages=pages ;
    })          
  })

//Set an array of sizes
const sizes = ['iphone-6', 'ipad-2'];

it('Navigation', function() 
{
  //Set an array of URL's
const urls = this.pages.page;
describe('Find the logo on mobile and tablet for 2 different sites', () => 
  {
    //for each URL do the thing in here
    urls.forEach(function(url)  
      {
        describe('url: ${url}', () => 
        {
        //The nested loop meaning that for each URL you go to we will also go into another loop and use each size as well.
        sizes.forEach(function(size)
          {
            it('Should display logo on ${url}', () => 
            {
              //uses the URL alias above
              cy.visit(url);
              const headermiss = (Cypress.$('.navbar').length > 0)
              //console.log(url)
              //console.log(size)

              //use the size alias above
              cy.viewport(size);
              
              cy.get('.cursor-pointer')  // get the containing toolbar
              .find('img[alt*="Zeal"]')  
              .should('have.attr', 'src')
 

              //test from a Cypress example for using a for each loop (but not a nested one)
              cy.percySnapshot(url);
          });
        });
        });
      });
  });
});
//});
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
  
  