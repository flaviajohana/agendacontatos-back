# Agenda de contatos

> Back-end para o sistema de agenda de contatos.

## Sobre o Sistema
O sistema de agenda de contatos tem como objetivo armazenar dados de contatos (nome telefone celular e email).

## Implementação
Para a implementação foi utilizado o framework express.js (https://expressjs.com/pt-br/).
As demais dependências encontram-se no arquivo de configuração package.json.
Para gerenciamento de dependências foi utilizado o Yarn (https://yarnpkg.com/)

## Deployment

``` bash
# Instalação de dependências
yarn install

# Para execução no ambiente de desenvolvimento
yarn start (na porta 9000, padrão express.js)

# Para execução no ambiente de homologação/produção
yarn build
