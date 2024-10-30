//Acesso ao portal RenovAcao
Given('que o usuario acessa a pagina de login do portal Renovacao', (tipoUsuario) => {
  cy.visit('/')
});

When('insere as credenciais de um administrador', (email, senha) => {
  cy.acessarTelaLogin()
  cy.realizarLoginAdmin()
});

When('insere as credenciais de um aluno', (email, senha) => {
  cy.acessarTelaLogin()
  cy.realizarLoginAluno()
});

When('insere as credenciais de um psicologo', (email, senha) => {
  cy.acessarTelaLogin()
  cy.realizarLoginPsico()
});

Then('devo ser autenticado com sucesso e redirecionado para a pagina inicial', () => {
  cy.visualizarTelaInicial()
});

//Saída do portal RenovAcao
Given('que o usuario esta logado no portal Renovacao', () => {
  cy.visualizarTelaInicial()
});

When('selecionar a opcao sair no menu hamburguer', () => {
  cy.selecionarOpcaoSair()
});

Then('devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal', () => {
  cy.visualizarTelaHome()
});