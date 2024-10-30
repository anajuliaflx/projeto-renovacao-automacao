#utf-8
#language: pt

Funcionalidade: Acesso ao portal Renovacao
    Cenário: Acessar portal com usuario administrador
        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um administrador
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial

    Cenário: Acessar portal com usuario aluno
        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um aluno
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial

    Cenário: Acessar portal com usuario psicologo
        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um psicologo
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial

    Cenário: Encerrar a sessao no portal Renovacao
        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao sair no menu hamburguer
        Entao devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal