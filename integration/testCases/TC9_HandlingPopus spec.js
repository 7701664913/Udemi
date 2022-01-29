/// <reference types="cypress" />

describe('Verify Click options', () => {

    
    it('force and Multiple click options', () =>{
    
        cy.visit('https://www.way2automation.com/')

        cy.window().then((win)=>{

            cy.stub(win,'open', ()=>{

                win.location.href='#menu-item-27622 > a > span.menu-text'
            
            }).as('popup')


        })

            cy.get('#menu-item-27625 > a > span.menu-text').click()
            //cy.get('@popup').should('be.calledWith','https://sso.teachable.com/secure/673/identity/login')
            cy.get('#email').type('carlos.geovan-ext@via.com.br')

    
        });
    
    })
    
    