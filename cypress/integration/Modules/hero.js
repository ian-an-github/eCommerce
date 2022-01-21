context.only("Check Fonts", function() {
    beforeEach(() => {
        cy.setsession()

        cy.fixture('pages').then(function(pages)
        {
            this.pages=pages ;
        })          
    })

    it('H1 Fonts', function() {
        const urls = this.pages.page;

        urls.forEach(function(url) {
        cy.visit(url,{failOnStatusCode:false})
        const headermiss = (Cypress.$('.heading-1').length > 0)
        console.log(headermiss)

            if (!headermiss) 
            {
                cy.get('.heading-1').each(($el, index, $header) => {
                    cy.get('.heading-1')   
                    .should('have.css', 'font-size')
                    .and('eq', '48px')
        
                    cy.get('.heading-1')   
                    .should('have.css', 'font-weight')
                    .and('eq', '700')
                    })
              }
            })
        })
    
    it('H2 Fonts', function() {
        const urls = this.pages.page;

        urls.forEach(function(url) {
        cy.visit(url,{failOnStatusCode:false})

        const headermiss = (Cypress.$('.heading-2').length > 0)

            if (!headermiss) {
                cy.get('.heading-2').each(($el, index, $header) => {
                    cy.get('.heading-2')   
                    .should('have.css', 'font-size')
                    .and('eq', '48px')
        
                    cy.get('.heading-2')   
                    .should('have.css', 'font-weight')
                    .and('eq', '700')
                    })
                }
            })
        })        

    it('H3 Fonts', function() {
        const urls = this.pages.page;

        urls.forEach(function(url) {
        cy.visit(url,{failOnStatusCode:false})
            if (cy.get(".heading-3").length > 0) {
                cy.get('.heading-3').each(($el, index, $header) => {
                    cy.get('.heading-3')   
                    .should('have.css', 'font-size')
                    .and('eq', '48px')
        
                    cy.get('.heading-3')   
                    .should('have.css', 'font-weight')
                    .and('eq', '700')
                    })
              }
            })
        })
    })



/*
describe('Check Header font on Mobile',function(){
    beforeEach(() => {
        cy.setsession()

        cy.fixture('pages').then(function(pages)
            {
                this.pages=pages ;
            })  

        cy.fixture('viewports').then(function(viewports)
            {
                this.viewports=viewports ;
            })  
        })

        it('Check Sizes', function() {
            const urls = this.pages.page;
            const sizes =  this.viewports.mobile ;

                urls.forEach(function(url) {
                sizes.forEach((size) => {
                describe('Check Sizes', function() {
                    cy.viewport(size)
                    cy.visit(url,{failOnStatusCode:false})         
                })            
            })
        })
    })
    */

