/// <reference types="cypress" />

describe('Verify Click options', () => {

    
    it('force and Multiple click options', () =>{
    
        cy.visit('http://qa.way2automation.com')
        cy.get('#load_form > div:nth-child(12) > div.span_1_of_4 > input').click({multiple: true, force: true})
    
    });
    
    })
    
    