/// <reference types="cypress" />

describe('Dragan and Dro', () => {

    
    it('Handling Dragan and Drop', () =>{
    
        cy.visit('https://jqueryui.com/resourses/demos/droppable/default.html')

        cy.get('#draggable').drag('#deoppable')
    
        });
    
    })
    
