When('selecionar a opcao cronograma no menu hamburguer', () => {
    cy.selecionarOpcaoCronograma()
});

When('preencher os campos obrigatorios da seção cadastrar evento e confirmar', () => {
    cy.preencherFormularioEvento()
    cy.cadastrarEvento()
});

When('preencher os campos obrigatorios da seção cadastrar trilha educativa e confirmar', () => {
  cy.preencherFormularioTrilhaEducativa()
  cy.cadastrarTrilhaEducativa()
  cy.mensagemTrilhaEducativaCadastrada()
  cy.preencherLinkTrilhaEducativa()
  cy.salvarLinksTrilhaEducativa()
});

Then('devo visualizar uma mensagem de evento cadastrado com sucesso', () => {
  cy.mensagemEventoCadastrado()
});

Then('devo visualizar uma mensagem links da trilha cadastrada com sucesso', () => {
  cy.mensagemLinksTrilhaEducativaCadastrado()
});