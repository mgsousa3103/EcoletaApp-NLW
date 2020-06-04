![Página home da aplicação](https://user-images.githubusercontent.com/22710485/83574923-d5953880-a504-11ea-8ab9-5b1eb837d9dd.png)

![](https://img.shields.io/github/issues/mgsousa3103/ecoleta-app-nlw) ![](https://img.shields.io/github/forks/mgsousa3103/ecoleta-app-nlw) ![](https://img.shields.io/github/stars/mgsousa3103/ecoleta-app-nlw) ![](https://img.shields.io/github/license/mgsousa3103/ecoleta-app-nlw)

# :computer: Projeto

Este projeto consiste na criação de uma aplicação cujo objetivo é funcionar como um marketplace entre empresas/organizações e pessoas para a coleta de resíduos recicláveis. Esta aplicação faz parte da semana **Next Level Week** promovida pela **Rocketseat**

# :rocket: Tecnologias

- [Typescript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [ReactJS](https://pt-br.reactjs.org/)
- [React Native](https://reactnative.dev/)

# :hammer: Backend

O projeto utiliza NodeJS

# :globe_with_meridians: Frontend

O projeto utiliza o ReactJS

# :iphone: Mobile

> #### Em construção

#### Passo-a-passo para rodar a aplicação

Faça o download do repositório ou realize um `git clone` para sua máquina. Esta aplicação utiliza:

- [Express](https://expressjs.com/pt-br/) como framework para criação de rotas, etc.
- [Knex](http://knexjs.org/) como SQL Query Builder
- [Sqlite](https://www.sqlite.org/index.html) como banco de dados da aplicação

##### Server

Após ter a aplicação em sua máquina, abra a pasta em seu terminal acesse a pasta **server** e instale as dependências com:

> `npm install` ou `yarn add`

Repita a mesma coisa na pasta **dev**

Com a instalação das dependências do servidor feita você pode rodá-lo com:

> `npm run dev` ou `yarn dev`

---

##### Migrations e Seeds

Para rodar as migrations e criar as tabelas em seu banco de dados, use:

> `npm run knex:migrate` ou `yarn knex:migrate`

A aplicação utiliza algumas imagens pré-estabelecidas, logo para ter acesso à elas, rode:

> `npm run knex:seed` ou `yarn knex:seed`

Este comando gerará a tabela **items** com as imagens que estão na pasta **uploads**.

---

##### Web

Com o servidor rodando, acesse a pasta **web** pelo seu terminal e rode o comando:

> `npm run start` ou `yarn start`

---

# :memo: Licença

Projeto sob a licença [MIT](https://choosealicense.com/licenses/mit/). Para mais detalhes acesse [LICENSE](LICENSE.md)

Made by [Matheus Guedes](https://www.linkedin.com/in/matheusgsousa/) :metal:
