/// <reference types="cypress" />

describe('Verify Click options', () => {

    
    it('force and Multiple click options', () =>{
    
        cy.visit('https://www.way2automation.com/')

        cy.get('#ast-desktop-header > div.ast-main-header-wrap.main-header-bar-wrap')//.invoke('removeAttr','target').click()

        cy.get('#menu-item-27625 > a > span.menu-text').click()
    
        });
    
    })
    
    