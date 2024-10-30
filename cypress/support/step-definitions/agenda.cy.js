When('selecionar a opcao agenda no menu hamburguer', () => {
    cy.selecionarOpcaoAgenda()
});

Then('devo visualizar o evento cadastrado pelo administrador com sucesso', () => {
  cy.visualizarEventoCadastrado()
});