/// <reference types="cypress" />

describe('Custom Commands', () => {

    
    it('Validate custom commands', () =>{
    
        cy.visit('https://www.way2automation.com/angularjs-protractor/banking/#/login')

        
        cy.get('body > div.ng-scope > div > div.ng-scope > div > div.borderM.box.padT20 > div:nth-child(3) > button').click()

        cy.addcustomer('Rahul','Arora','110095')

        });
    
    })
    
 