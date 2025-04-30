# API Node - CRUD
Esta é uma API em Node com um CRUD básico de cinco rotas.

> [!NOTE]
> A API e o banco de dados não estão hospedados em nenhum servidor.

## Como testar?
- Acesse: `localhost:3000`
- Dentro da pasta node-web-api execute: `npm run dev`
- Simule um servidor local para rodar o front-end
- Entre na pasta bin do mysql e execute o comando no terminal para importar o banco:
~~~cmd
mysql -u root -p < caminho-até-a-pasta/API-node-CRUD/node-web-api/webapi_db.sql
~~~

## Documentação
A documentação foi feita utilizando o Swagger. Acesse em:
`localhost:3000/api-docs`