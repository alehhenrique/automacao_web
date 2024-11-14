/// <reference types="cypress"/>

// Funcionalidade

describe('Login', () => {
    it('Login com sucesso', () => {
    // DADO
    // Acessar a tela inicial
    cy.visit('https://automationpratice.com.br/')
    // Clicar para entrar na tela de Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    // QUANDO
    // Digitar Email
    cy.get('#user').type('ale@qazando.com')
    // Digitar Senha
    cy.get('#password').type('785426898548')
    // Clicar no botão 'Login'
    cy.get('#btnLogin').click()
    // ENTÃO
    // Validar que o Login foi realizado.
    cy.get('#swal2-title').should('have.text', "Login realizado")
    })
    it('Email inválido', () => {
    // DADO
    // Acessar a tela inicial
    cy.visit('https://automationpratice.com.br/')
    // Clicar para entrar na tela de Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    // QUANDO
    // Digitar um Email inválido
    cy.get('#user').type('alessandro')
    // Digitar Senha
    cy.get('#password').type('785426898548')
    // Clicar no botão 'Login'
    cy.get('#btnLogin').click()
    // ENTÃO
    // Validar que o Email é inválido
    cy.get('.invalid_input').should('have.text', "E-mail inválido.")
    })
    it('Senha inválida', () => {
    // DADO
    // Acessar a tela inicial
    cy.visit('https://automationpratice.com.br/')
    // Clicar para entrar na tela de Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    // QUANDO
    // Digitar um Email
    cy.get('#user').type('ale@qazando.com')
    // Digitar Senha inválida
    cy.get('#password').type('18750')
    // Clicar no botão 'Login'
    cy.get('#btnLogin').click()
    // ENTÃO
    // Validar que a Senha é inválida
    cy.get('.invalid_input').should('have.text', "Senha inválida.")
    })
    it('Email vazio', () => {
    // DADO
    // Acessar a tela inicial
    cy.visit('https://automationpratice.com.br/')
    // Clicar para entrar na tela de Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    // QUANDO
    // Digitar Senha
    cy.get('#password').type('785426898548')
    // Clicar no botão 'Login'
    cy.get('#btnLogin').click()
    // ENTÃO
    // Validar que o Email é vazio
    cy.get('.invalid_input').should('have.text', "E-mail inválido.")
    })
    it('Senha vazia', () => {
    // DADO
    // Acessar a tela inicial
    cy.visit('https://automationpratice.com.br/')
    // Clicar para entrar na tela de Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    // QUANDO
    // Digitar um Email
    cy.get('#user').type('ale@qazando.com')
    // Clicar no botão 'Login'
    cy.get('#btnLogin').click()
    // ENTÃO
    // Validar que a Senha é vazia
    cy.get('.invalid_input').should('have.text', "Senha inválida.")
    })
    it('Email e senha vazias', () => {
    // DADO
    // Acessar a tela inicial
    cy.visit('https://automationpratice.com.br/')
    // Clicar para entrar na tela de Login
    cy.get('.right_list_fix > :nth-child(1) > a').click()
    // QUANDO
    // Clicar no botão 'Login'
    cy.get('#btnLogin').click()
    // ENTÃO
    // Validar que a Senha e Email são vazios
    cy.get('.invalid_input').should('have.text', "E-mail inválido.")
    })
})
