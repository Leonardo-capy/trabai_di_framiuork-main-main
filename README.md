
# Sistema de Cadastro de Produtos e Pessoas

Projeto desenvolvido para fins de aprendizado e prática de integração entre front-end e back-end, utilizando tecnologias como **HTML**, **CSS**, **JavaScript**, **Node.js** e **MySQL**. O sistema permite o cadastro e a busca de produtos e pessoas.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS e JavaScript puro
- **Backend**: Node.js com o framework Fastify
- **Banco de Dados**: MySQL
- **Linguagem principal**: TypeScript
- **Ferramentas**: tsx, typescript, mysql2

## Estrutura do Projeto

```
.
├── public/
│   ├── index.html         # Tela de cadastro de produtos
│   ├── buscar.html        # Página para buscar produtos
│   ├── produtos.html      # Exibição dos produtos cadastrados
│   ├── pessoa.html        # Formulário para cadastro de pessoas
│   ├── style.css          # Estilo global
├── index.ts               # Código do servidor (API)
├── main.sql               # Script de criação das tabelas no banco
├── package.json           # Informações do projeto e dependências
├── package-lock.json      # Gerenciamento de versões das dependências
├── tsconfig.json          # Configurações do TypeScript
├── README.md              # Documentação do projeto
```

## Como Rodar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/Leonardo-capy/trabai_di_framiuorks-main.git
cd trabai_di_framiuorks-main
```

### 2. Instalar as dependências

```bash
npm install
```
ou
```bash
npm i
```

### 3. Configurar o banco de dados

- Crie um banco MySQL local ou remoto.
- Importe o arquivo `main.sql` usando o MySQL Workbench ou outro gerenciador de sua preferência.

### 4. Rodar o servidor

```bash
npm run dev
```

## Funcionalidades

### Produtos

- Cadastro de produtos com nome, preço e vendedor
- Busca por nome do produto
- Listagem completa de produtos cadastrados

### Pessoas

- Cadastro com nome, email, senha, telefone e gênero
- Listagem automática das pessoas registradas
- IDs gerados automaticamente

## Endpoints da API

- `GET /produto` – Lista todos os produtos
- `POST /produto` – Cadastra um novo produto
- `GET /pessoa` – Lista todas as pessoas
- `POST /pessoa` – Cadastra uma nova pessoa

## Visual e Estilo

O sistema tem uma interface simples em modo escuro com cores em tons de azul para uma navegação agradável.
