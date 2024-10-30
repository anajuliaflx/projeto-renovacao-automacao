const moment = require('moment')

const EVENTO = '.rbc-event-content'

const DATAFUTURA = moment().add(1, 'days')
const DATAFORMATADA = DATAFUTURA.format('YYYY-MM-DD')

Cypress.Commands.add('visualizarEventoCadastrado',()=>{
    cy.get(EVENTO).contains('Título evento criado por Administrador em '+ DATAFORMATADA).should('be.visible')
})