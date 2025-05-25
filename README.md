
# 🛒 Sistema de Cadastro de Produtos e Pessoas

Este projeto é um sistema web simples construído com **HTML**, **CSS**, **JavaScript (Vanilla)**, **Node.js (Fastify)** e **MySQL**, com o objetivo de cadastrar e buscar **produtos** e **pessoas**.

## 🔧 Tecnologias Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js com Fastify
- **Banco de Dados**: MySQL
- **Linguagem de Script**: TypeScript (compilado para JS)
- **Ferramentas**: tsx, typescript, mysql2

## 📁 Estrutura do Projeto

```
.
├── index.html           # Página principal de cadastro de produtos
├── buscar.html          # Página para busca de produtos por nome
├── produtos.html        # Página para visualizar todos os produtos cadastrados
├── pessoa.html          # Página para cadastro de pessoas
├── style.css            # Estilo adicional global (pouco utilizado)
├── index.ts             # Servidor Node.js com Fastify
├── main.sql             # Script para criação das tabelas no MySQL
├── package.json         # Dependências e scripts do projeto
```

## ⚙️ Instalação e Execução

### 1. Clone o repositório

```bash
git clone https://github.com/Leonardo-capy/trabai_di_framiuorks-main.git
cd trabai_di_framiuorks-main
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure o banco de dados

- Crie um banco de dados MySQL.
- Execute o script `main.sql` para criar as tabelas necessárias.

### 4. Execute o servidor

Modo desenvolvimento (com recarregamento automático):

```bash
npm run dev
```

Modo produção:

```bash
npm run build
npm start
```

## 🌐 Funcionalidades

### Produtos

- ✅ Cadastro de produto (`index.html`)
- 🔍 Busca de produto por nome (`buscar.html`)
- 📋 Listagem de produtos cadastrados (`produtos.html`)

### Pessoas

- ✅ Cadastro de pessoa com nome, email, senha, telefone e gênero (`pessoa.html`)
- 📋 Listagem automática de pessoas após cadastro

## 📂 Endpoints da API

- `GET /produto`: Retorna todos os produtos
- `POST /produto`: Cadastra um novo produto
- `GET /pessoa`: Retorna todas as pessoas
- `POST /pessoa`: Cadastra uma nova pessoa

## 🖌️ Estilo

O estilo segue um padrão **dark mode**, com cores suaves e foco em legibilidade e usabilidade.

## 📄 Licença

Este projeto está sob a licença ISC.
