/// <reference types="cypress" />

describe('Handling Mouse Ove', () => {

    
    it('Handling Mouse Over', () =>{
    
        cy.visit('https://jqueryui.com/resourses/demos/droppable/default.html')

            
            cy.contains('Video Tutorial').trigger('mouseover')
            cy.wait(10000)
         
            //cy.contains('Cypress').click()

        });
    
    })
    
