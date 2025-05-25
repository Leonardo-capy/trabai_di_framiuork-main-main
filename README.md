
# Sistema de Cadastro de Produtos e Pessoas

Este projeto é um sistema web simples construído com **HTML**, **CSS**, **JavaScript (Vanilla)**, **Node.js (Fastify)** e **MySQL**, com o objetivo de cadastrar e buscar **produtos** e **pessoas**.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js com Fastify
- **Banco de Dados**: MySQL
- **Linguagem de Script**: TypeScript (compilado para JS)
- **Ferramentas**: tsx, typescript, mysql2

## Estrutura do Projeto

```
.
├── public/
│   ├── index.html         # Página principal de cadastro de produtos
│   ├── buscar.html        # Página para busca de produtos por nome
│   ├── produtos.html      # Página para visualizar todos os produtos cadastrados
│   ├── pessoa.html        # Página para cadastro de pessoas
│   ├── style.css          # Estilo global
├── index.ts               # Servidor Node.js com Fastify
├── main.sql               # Script SQL de criação do banco
├── package.json           # Configuração do projeto Node.js
├── package-lock.json      # Lockfile do npm
├── tsconfig.json          # Configuração do TypeScript
├── README.md              # Documentação do projeto

```

## Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Leonardo-capy/trabai_di_framiuorks-main.git
cd trabai_di_framiuorks-main
```

### 2. Instale as dependências

```bash
npm install
```
ou
```bash
npm i
``

### 3. Configure o banco de dados

- Crie um banco de dados MySQL.
- Execute o script `main.sql` para criar as tabelas necessárias no mysqlworkbench ou algum de sua preferencia

### 4. Execute o servidor


```bash
npm run dev
```

## Funcionalidades

### Produtos

- Cadastro de produto (`index.html`)
- Busca de produto por nome (`buscar.html`)
- Listagem de produtos cadastrados (`produtos.html`)

### Pessoas

- Cadastro de pessoa com nome, email, senha, telefone e gênero (`pessoa.html`)
- Listagem automática de pessoas após cadastro
- ID auto incrementado

## Endpoints da API

- `GET /produto`: Retorna todos os produtos
- `POST /produto`: Cadastra um novo produto
- `GET /pessoa`: Retorna todas as pessoas
- `POST /pessoa`: Cadastra uma nova pessoa

## Estilo

O estilo segue um padrão **dark mode**, com detalhes em azul para um toque moderno


