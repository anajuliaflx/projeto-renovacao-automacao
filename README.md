# <h1 align="center">RenovAção: Agenda de Reintegração</h1>

## Automação de testes com Cypress

Este projeto utiliza o framework **Cypress** para automatizar testes end-to-end do sistema **RenovAção: Agenda de Reintegração**, com foco em funcionalidades de agenda de reintegração e trilhas educativas para combater o cyberbullying. A automação inclui fluxos como cadastro de eventos e trilhas, visando garantir a estabilidade e a funcionalidade do sistema.

## Visão geral do projeto

O sistema **RenovAção: Agenda de Reintegração** é uma plataforma de reeducação para casos de cyberbullying nas Instituições de Ensino Superior (IES). O projeto de automação de testes com Cypress inclui:

- **Cadastro de eventos**: Teste da funcionalidade de agendamento de eventos para o acompanhamento psicológico.
- **Cadastro de trilhas**: Validação do fluxo de criação e gerenciamento de trilhas educativas, com testes focados na integração entre as páginas e o integridade dos dados.

## Pré-requisitos

Para executar este projeto, você precisa ter:

- **[VS Code](https://code.visualstudio.com/)**: Edição de código e organização da estrutura do projeto. Extensões recomendadas: Cucumber (Gherkin) Full Support; Material Icon Theme.
- **[Node.js](https://nodejs.org/)**: Plataforma para execução de testes automatizados.
- **Cypress**: Principal ferramenta para automação dos testes.

## Instalação

1. **Clone o repositório e acesse a pasta**:

    ```bash
    git clone https://github.com/anajuliaflx/projeto-renovacao-automacao.git
    ```

    ```bash
    cd projeto-renovacao-automacao
    ```

2. **Instale as dependências**:

    ```bash
    npm install
    ```

3. **Instale o Cypress**:

    ```bash
    npm install cypress --save-dev
    ```

4. **Abra o Cypress**:

    ```bash
    npx cypress open
    ```

5. **Configure o Cypress**:
   - Clique em “E2E Testing (Not Configured)” e confirme a criação dos arquivos de configuração.

6. **Atualize a configuração do Cypress**:
   - No arquivo `cypress.config.js`, atualize a URL base para apontar ao ambiente de testes da aplicação:

    ```javascript
    module.exports = {
      e2e: {
        baseUrl: 'https://projeto-renovacao.web.app/',
      },
    };
    ```

## Execução dos testes

Para rodar os testes, utilize os seguintes comandos:

- **Abrir a interface do Cypress**:

    ```bash
    npx cypress open
    ```

  Este comando permite selecionar testes específicos e visualizar sua execução.

## Estrutura dos testes

- **`cypress/e2e`**: Contém os arquivos de teste organizados por funcionalidades (ex.: `cronograma.feature`).
- **`cypress/support`**: Inclui funções auxiliares para configurar e limpar o ambiente antes e após os testes.
- **`cypress/fixtures`**: Dados de teste em JSON para serem reutilizados em diferentes cenários.

## Feedback e contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Autores

- [@anajulia](https://github.com/anajuliaflx)
- [@arielmartins](https://github.com/martinsariel)
- [@edmilsonpessoa](https://github.com/edmilsonpmfilho)