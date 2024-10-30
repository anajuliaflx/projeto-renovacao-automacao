When('selecionar a opcao trilha educativa no menu hamburguer', () => {
    cy.selecionarOpcaoTrilhaEducativa()
});

Then('devo visualizar a trilha cadastrada pelo administrador com sucesso', () => {
  cy.visualizarTrilhaEducativaCadastrada()
});