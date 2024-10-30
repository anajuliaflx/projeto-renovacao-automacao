const moment = require('moment')

const INPUT_DATA = 'input.cronograma_inputDate__jWQDh'
const INPUT_FORM = 'input.cronograma_inputText__j7LIR'
const INPUT_TEXTAREA = 'textarea.cronograma_textarea__V-JzG'
const BTN_CADASTRAR = 'button[type="submit"]'

const DATAFUTURA = moment().add(1, 'days')
const DATAFORMATADA = DATAFUTURA.format('YYYY-MM-DD')

const INPUT_URL_TRILHA = 'input[name="url"]'
const INPUT_TITULO_TRILHA = '[name="titulo"]'
const INPUT_DESCRICAO_TRILHA = '.ReactModal__Content > form > div > .cronograma_textarea__V-JzG'

Cypress.Commands.add('preencherFormularioEvento', () => {
    cy.get(INPUT_DATA).type(DATAFORMATADA)
    cy.contains('Matrícula do aluno:').parent().find(INPUT_FORM).type('44244224')
    cy.contains('Matrícula do psicólogo:').parent().find(INPUT_FORM).type('44344334')
    cy.get('div').contains('Descrição do Evento:').siblings(INPUT_TEXTAREA).should('be.visible').type('Título evento criado por Administrador em ' + DATAFORMATADA)
})

Cypress.Commands.add('cadastrarEvento', () => {
    cy.get(BTN_CADASTRAR).contains('Cadastrar evento').should('be.visible').click()
})

Cypress.Commands.add('mensagemEventoCadastrado', () => {
    cy.get('p').contains('Evento adicionado com sucesso').should('be.visible');
})

Cypress.Commands.add('preencherFormularioTrilhaEducativa', () => {
    cy.contains('Título:').parent().find(INPUT_FORM).type('Título trilha educativa cadastrada pelo Administrador em ' + DATAFORMATADA)
    cy.get('div').contains('Descrição:').siblings(INPUT_TEXTAREA).should('be.visible').type('Descrição trilha educativa cadastrada pelo Administrador em ' + DATAFORMATADA)
    cy.get(':nth-child(4) > .cronograma_form__lK-He > :nth-child(3) > .cronograma_inputText__j7LIR').type('44244224')
})

Cypress.Commands.add('cadastrarTrilhaEducativa', () => {
    cy.get(BTN_CADASTRAR).contains('Cadastrar trilha').should('be.visible').click()
})

Cypress.Commands.add('mensagemTrilhaEducativaCadastrada', () => {
    cy.get('p').contains('Trilha adicionada com sucesso').should('be.visible')
})

Cypress.Commands.add('preencherLinkTrilhaEducativa', () => {
    cy.contains('URL:').parent().find(INPUT_URL_TRILHA).type('https://www.youtube.com/watch?v=OBe1-nenr64')
    cy.get(INPUT_TITULO_TRILHA).type('Cyberbullying - Brasil Escola')
    cy.get(INPUT_DESCRICAO_TRILHA).type('Aprenda tudo sobre o cyberbullying, nova forma de violência nas redes sociais; veja também que o Brasil é o segundo país no mundo com mais números de cyberbullying.')
})

Cypress.Commands.add('salvarLinksTrilhaEducativa', () => {
    cy.get(BTN_CADASTRAR).contains('Salvar links').should('be.visible').click()
})

Cypress.Commands.add('mensagemLinksTrilhaEducativaCadastrado', () => {
    cy.get('p').contains('Links adicionados com sucesso').should('be.visible');
})