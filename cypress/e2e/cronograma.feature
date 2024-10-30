#utf-8
#language: pt

Funcionalidade: Cadastro de atividades e consultas para o aluno
  Cenario: Cadastrar evento com sucesso
        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um administrador
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial
        
        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao cronograma no menu hamburguer
        E preencher os campos obrigatorios da seção cadastrar evento e confirmar
        Entao devo visualizar uma mensagem de evento cadastrado com sucesso

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao sair no menu hamburguer
        Entao devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal

        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um aluno
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao agenda no menu hamburguer
        Entao devo visualizar o evento cadastrado pelo administrador com sucesso

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao sair no menu hamburguer
        Entao devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal

  Cenario: Cadastrar trilha educativa com sucesso
        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um administrador
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial
        
        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao cronograma no menu hamburguer
        E preencher os campos obrigatorios da seção cadastrar trilha educativa e confirmar
        Entao devo visualizar uma mensagem links da trilha cadastrada com sucesso

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao sair no menu hamburguer
        Entao devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal

        Dado que o usuario acessa a pagina de login do portal Renovacao
        Quando insere as credenciais de um aluno
        Entao devo ser autenticado com sucesso e redirecionado para a pagina inicial

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao trilha educativa no menu hamburguer
        Entao devo visualizar a trilha cadastrada pelo administrador com sucesso

        Dado que o usuario esta logado no portal Renovacao
        Quando selecionar a opcao sair no menu hamburguer
        Entao devo ser desconectado da sessao atual e redirecionado para a pagina inicial do portal