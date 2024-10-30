

const moment = require('moment')

const TRILHA = '.trilha_trilhaBloco__lGMX-'

const DATAFUTURA = moment().add(1, 'days')
const DATAFORMATADA = DATAFUTURA.format('YYYY-MM-DD')

Cypress.Commands.add('visualizarTrilhaEducativaCadastrada',()=>{
    cy.get(TRILHA).within(() => {
        cy.get('h2').contains('Título trilha educativa cadastrada pelo Administrador em ' + DATAFORMATADA).should('be.visible')
        cy.get('p').contains('Descrição trilha educativa cadastrada pelo Administrador em ' + DATAFORMATADA).should('be.visible')
        cy.get('button').contains('Entrar').should('be.visible')
      })
})