/// <reference types="cypress" />

describe('Uploading file with Cypress', () => {

    
    it('downloadFile a file', () =>{
    
       
        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

        
    cy.readFile('./mydownloads/example.jpg').should('exist')
    
        });
    
    })
    
 