/// <reference types="cypress" />

describe('Uploading file with Cypress', () => {

    
    it('Uploading a file', () =>{
    
        cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp')

       const yourFixturePath = 'Cypress_logo2.png';

       cy.get('[type="file"]').attachFile(yourFixturePath);
    
        });
    
    })
    
 