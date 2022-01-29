/// <reference types="cypress" />

describe('Slider', () => {


    
    
    it('Validation Slider', () =>{
    
        cy.visit('https://jqueryui.com/resizable/')

        cy.wait(2000)
        cy.get('#resizable').invoke('attr','style','width: 410px; height: 250px;')
        
        
 
              
                
        });
    
    })
    
