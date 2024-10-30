#utf-8
#language: pt

Funcionalidade: Visualizacao de eventos cadastrados
  Cenario: Visualizar eventos cadastrados com sucesso
        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um aluno
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao agenda no menu hamburguer
        Entao devo visualizar o evento cadastrado pelo administrador com sucesso

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao sair no menu hamburguer
        Entao devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal