/// <reference types="cypress"/>
const perfil = require ('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
         cy.visit('minha-conta')

    });
    // Captura de tela após cada cenário

    afterEach(() => {
        cy.screenshot()
    });


    it('Deve fazer login com sucesso', () => {
        cy.get('#username').type('eli@teste.com.br')
        cy.get('#password').type('123testemudar')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eli (não é eli? Sair)')
});






it('Deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('el@teste.com.br')
        cy.get('#password').type('123testemudar')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
});


it('Deve exibir uma mensagem de erro ao inserir uma senha inválida', () => {
        cy.get('#username').type('eli@teste.com.br')
        cy.get('#password').type('testemudar')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail eli@teste.com.br está incorreta. Perdeu a senha?')
});

it('Deve fazer login com sucesso usando massa de dados',() => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eli (não é eli? Sair)')

})



it('Deve fazer login com sucesso usando Fixture',() => {
        cy.fixture('perfil').then(dados => {
            cy.get('#username').type(dados.usuario, {log:false}) // o log:false esconde a informação do usuário no relatório do cypress)
            cy.get('#password').type(dados.senha,{log:false})
            cy.get('.woocommerce-form > .button').click()
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eli (não é eli? Sair)')
        
})

        });

        it.only('Deve fazer login com sucesso usando Comando Customizado',() => {
                 cy.login('eli@teste.com.br', '123testemudar')
                cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, eli (não é eli? Sair)')

        });

})