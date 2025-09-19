# Cypress UI Testing for DemoQA

## Descrição

Este repositório contêm um conjunto de testes automatizados para testar a UI da demoQA utilizando o **Cypress**. 

Este repositório inclui:
- Testes para a página de forms
- Testes para a página de register
- Testes para a página de progress bar
- Testes para a página de new window
- Testes para a página interactions
- Integração com o plugin `cypress-allure` para dashboards e relatórios.
- Geradores de dados dinâmicos com `faker.js` para criar dados de teste realistas.

## Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes end-to-end
- [faker.js](https://github.com/faker-js/faker) - Gerador de dados aleatórios para os testes
- [allure](https://allurereport.org/docs/cypress/) - Relatórios de teste

## Como Iniciar

##  Pré-requisitos
- Possuir o `Node.js` instalado
- Possuir o `Git`  instalado

##  Clonar o projeto 
Execute o seguinte comando em seu terminal:	

    git clone https://github.com/Joaovscampos/desafio2_ui.git

##  Executando o projeto
**OBS: Para executar o projeto é necessário que você tenha clonado.**

Siga os seguintes passos para fazer a execução:

    cd desafio2_ui
### Executar pela primeira vez 
Instalar as dependências 

    npm install 
executar as specs

    npm run cy:run

Comandos de execução:

-   **npm run cy:open**: abrir interface gráfica do cypress.
-   **npm run cy:run**: Execução headless
-   **npm run allure:open**: após primeira execução headless - abrir dashboard
