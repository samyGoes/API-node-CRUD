# API Node - CRUD
Esta é uma API em Node com um CRUD básico de cinco rotas.

> [!NOTE]
> A API e o banco de dados não estão hospedados em nenhum servidor.

## Como testar?
- Simule um servidor local para rodar o front-end, caso queira baixe o [xampp](https://www.apachefriends.org/pt_br/index.html) (ele já contém o `apache` e `mysql`);
- Entre na pasta `xampp/htdocs/` pelo terminal e execute o comando para clonar o repositório:
~~~cmd
git clone https://github.com/samyGoes/API-node-CRUD.git
~~~
> Você precisa ter o [GIT](https://git-scm.com/downloads) instalado para executar o comando acima.
- Entre na pasta `xampp/mysql/bin/` e execute o comando no terminal para importar o banco:
~~~cmd
mysql -u root -p < "caminho-até-a-pasta/xampp/htdocs/API-node-CRUD/node-web-api/webapi_db.sql"
~~~
- Dentro da pasta `xampp/htdocs/API-node-CRUD/node-web-api` execute pelo terminal o comando: `npm run dev`
- Acesse `localhost/API-node-CRUD/web-api-front-end/` no navegador :)

## Documentação
A documentação foi feita utilizando o Swagger. Acesse em:
`localhost:3000/api-docs`
