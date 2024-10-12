describe('testeIntegration', () => {
    it('teste1', () => {

        cy.visit('www.google.com.br')
       
        cy.log('error'),
        cy.get('error')
    });
    
});