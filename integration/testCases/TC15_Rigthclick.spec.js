/// <reference types="cypress" />

describe('Slider', () => {


    
    
    it('Validation Slider', () =>{
    
        cy.visit('https://deluxe-menu.com/popup-mode-sample.html')

        cy.wait(2000)
        cy.get('body > div > table > tbody > tr > td.pgCenter > div:nth-child(2) > table:nth-child(1) > tbody > tr > td.contentTd > p:nth-child(17) > img').rightclick()
        cy.contains('Contact Us').click()
        
 
              
                
        });
    
    })
    
