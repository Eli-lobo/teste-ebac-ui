/// <reference types="cypress" />

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
         cy.visit('produtos')
    });
    it('Deve selecionar um produto da lista', () => {
        cy.get('.products > .row')
        
        // o first() seleciona o primeiro item da lista
        // o last() seleciona o último item da lista
        // o eq(3) seleciona o item da posição 3 da lista, começando do 0
        // o contains('Abominable Hoodie') seleciona o item que contém o texto 'Abominable Hoodie'
            //.first()
           // .last()
           //  .eq(3)
           .contains('Abominable Hoodie')
            .click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

});
