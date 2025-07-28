# Projeto Drip Store - Backend (BD)

Este repositório contém o código-fonte do backend do Projeto Drip Store, responsável por gerenciar a lógica de negócios, autenticação de usuários e interação com o banco de dados. Ele foi desenvolvido utilizando Node.js com o framework Express, e o Prisma como ORM para facilitar a comunicação com o banco de dados.

## Funcionalidades

- **Autenticação de Usuários**: Gerenciamento de registro e login de usuários com JWT (JSON Web Tokens).
- **API RESTful**: Fornece endpoints para o frontend interagir com os dados da aplicação.
- **Integração com Banco de Dados**: Utiliza Prisma para manipulação de dados de forma eficiente e segura.
- **CORS Habilitado**: Permite requisições de diferentes origens, facilitando a comunicação com o frontend.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js, utilizado para construir APIs RESTful.
- **Prisma**: ORM (Object-Relational Mapper) para Node.js e TypeScript, facilitando a interação com bancos de dados.
- **bcrypt**: Biblioteca para hash de senhas, garantindo a segurança das credenciais dos usuários.
- **cors**: Middleware para Express que habilita o CORS (Cross-Origin Resource Sharing).
- **dotenv**: Módulo para carregar variáveis de ambiente de um arquivo `.env`.
- **jsonwebtoken**: Implementação de JWT para autenticação e autorização.
- **nodemon**: Ferramenta que ajuda no desenvolvimento de aplicações baseadas em Node.js, reiniciando automaticamente o servidor a cada alteração de arquivo.
- **Jest**: Framework de teste para JavaScript (utilizado para testes, embora não haja testes implementados no momento da análise).

## Instalação e Execução

Para configurar e executar o projeto em sua máquina local, siga os passos abaixo:

### Pré-requisitos

Certifique-se de ter o Node.js e o npm (ou yarn) instalados em sua máquina. Além disso, é necessário ter um banco de dados configurado e acessível (o Prisma suporta diversos bancos de dados como PostgreSQL, MySQL, SQLite, SQL Server, MongoDB).

### Clone o repositório

```bash
git clone https://github.com/jotaveeo/ProjetoDripStore-BD.git
cd ProjetoDripStore-BD
```

### Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto e adicione as variáveis de ambiente necessárias, como a URL de conexão com o banco de dados. Exemplo:

```
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
JWT_SECRET="sua_chave_secreta_jwt"
```

### Instale as dependências

```bash
npm install
# ou
yarn install
```

### Execute as migrações do Prisma (se aplicável)

Se você estiver usando o Prisma para gerenciar o esquema do banco de dados, pode ser necessário executar as migrações:

```bash
npx prisma migrate dev --name init
```

### Execute o projeto em modo de desenvolvimento

```bash
npm run dev
# ou
yarn dev
```

O servidor estará rodando em `http://localhost:3000` (ou na porta configurada no `server.js`).

### Execute o projeto em modo de produção

```bash
npm start
# ou
yarn start
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Desenvolvido por João Vitor Oliveira.

