/// <reference types="cypress" />

describe('Verify Alerts', () => {

    
    it('Handling Alerts', () =>{
    
        cy.visit('https://www.w3resourse.com/javascript/alert-example1.html')

        cy.on('window:alert',(alertText)=>{

            expect(alertText).eq("We'd like to show you notifications for the latest news and updates.")

        })

    
        });
    
    })
    
