//Tela home
const BTN_ACESSAR_CONTA = 'button[type="submit"]'

//Tela login
const INPUT_EMAIL = 'input[name="email"]'
const INPUT_SENHA = 'input[name="senha"]'
const BTN_LOGIN = 'button[type="submit"]'

//Menu hamburguer
const BTN_MENU = '[data-testid="MenuIcon"]'
const BTN_LI_OPCOES = 'button.button'
const BTN_SAIR = 'button.logout-button'

Cypress.Commands.add('visualizarTelaHome',()=>{
    cy.get(BTN_ACESSAR_CONTA).should('be.visible')
})

Cypress.Commands.add('acessarTelaLogin',()=>{
    cy.visualizarTelaHome()
    cy.get(BTN_ACESSAR_CONTA).click()
})

Cypress.Commands.add('realizarLoginAdmin',()=>{
    cy.get(INPUT_EMAIL).type('joaoarthurcampos@yopmail.com')
    cy.get(INPUT_SENHA).type('joao1234')
    cy.get(BTN_LOGIN).contains('Login').click()
})

Cypress.Commands.add('realizarLoginAluno',()=>{
    cy.get(INPUT_EMAIL).type('pedrosilveira77@yopmail.com')
    cy.get(INPUT_SENHA).type('pedro1234')
    cy.get(BTN_LOGIN).contains('Login').click()
})

Cypress.Commands.add('realizarLoginPsico',()=>{
    cy.get(INPUT_EMAIL).type('cristianegoncalves98@yopmail.com')
    cy.get(INPUT_SENHA).type('cris1234')
    cy.get(BTN_LOGIN).contains('Login').click()
})

Cypress.Commands.add('visualizarTelaInicial',()=>{
    cy.get(BTN_MENU).should('be.visible')
})

Cypress.Commands.add('clicarNoMenu',()=>{
    cy.get(BTN_MENU).click()
})

//Admin
Cypress.Commands.add('selecionarOpcaoCronograma',()=>{
    cy.clicarNoMenu()
    cy.get(BTN_LI_OPCOES).contains('Cronograma').click()
})

//Aluno
Cypress.Commands.add('selecionarOpcaoTrilhaEducativa',()=>{
    cy.clicarNoMenu()
    cy.get(BTN_LI_OPCOES).contains('Trilha educativa').click()
})

//Psico

//Aluno e Psico
Cypress.Commands.add('selecionarOpcaoAgenda',()=>{
    cy.clicarNoMenu()
    cy.get(BTN_LI_OPCOES).contains('Agenda').click()
})

//Todos usuários
Cypress.Commands.add('selecionarOpcaoMensagens',()=>{
    cy.clicarNoMenu()
    cy.get(BTN_LI_OPCOES).contains('Mensagens').click()
})

Cypress.Commands.add('selecionarOpcaoSair',()=>{
    cy.clicarNoMenu()
    cy.get(BTN_SAIR).click()
})