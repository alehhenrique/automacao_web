/// <reference types="cypress"/>

// Funcionalidade

describe('Registro', () => {
    it('Registro com sucesso', () => {
    // DADO
    // Acessar a tela de Login
    cy.visit('https://www.automationexercise.com/login')
    // QUANDO
    // Digitar nome
    cy.get('[data-qa="signup-name"]').type('Alessandro')
    // Digitar Email
    cy.get('[data-qa="signup-email"]').type('ale@testter.com.br')
    // Clicar no botão 'Signup'
    cy.get('[data-qa="signup-button"]').click()
    // Marcar a opção 'Mr.'
    cy.get('#id_gender1').click()
    // Digitar senha
    cy.get('[data-qa="password"]').type('7584899512654')
    // Clicar na lista 'Day' e marcar '16'
    cy.get('#days').select('16').should('have.value', '16')
    // Clicar na lista 'Monther' e marcar 'May'
    cy.get('#months').select('5').should('have.value', '5')
    // Clicar na lista 'Year' e marcar '2002'
    cy.get('#years').select('2002').should('have.value', '2002')
    // Marcar a opção 'Sign up for our newsletter!'
    cy.get('#newsletter').click()
    // Digitar o nome
    cy.get('#first_name').type('Alessandro')
    // Digitar o sobrenome
    cy.get('#last_name').type('Assis')
    // Digitar a empresa
    cy.get('#company').type('Tester Company')
    // Digitar o endereço 1
    cy.get('#address1').type('Rua Planície do Amazonas, 37')
    // Digitar o endereço 2
    cy.get('#address2').type('Rua Norte Brasil, 54')
    // Clicar na lista 'Country' e marcar 'Canada'
    cy.get('#country').select('Canada').should('have.value', 'Canada')
    // Digitar o estado
    cy.get('#state').type('Rio Grande do Norte')
    // Digitar a cidade
    cy.get('#city').type('Natal')
    // Digitar CEP
    cy.get('#zipcode').type('59-123.425')
    // Digitar Telefone
    cy.get('#mobile_number').type('(84) 9 9676-5261')
    // Clicar no botão 'Create Account'
    cy.get('[data-qa="create-account"]').click()
    // ENTÃO
    // Validar que o registro foi realizado.
    cy.get('[data-qa="continue-button"]').click()
    })
})