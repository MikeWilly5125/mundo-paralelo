describe('testeIntegration', () => {
    it('teste1', () => {

        cy.visit('www.google.com.br')
        
    });

    it('teste2', () => {

        cy.visit('www.google.com.br')
        cy.log('error'),
        cy.get('error')
    });
    
    it('teste3', () => {

        cy.visit('www.google.com.br')
        cy.url().should('includes', 'google')
        
    });

    it('teste4', () => {

        cy.visit('www.google.com.br')
       
    });
});