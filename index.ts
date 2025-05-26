import mysql from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import cors from '@fastify/cors';
import fastifyStatic from '@fastify/static';
import path from 'path';

const site = fastify();
site.register(cors);

const dbConfig = {
    host: "localhost",
    user: "leo",
    password: "12345678",
    database: 'trabalho_catalogo',
    port: 3306
};

site.register(fastifyStatic, {
    root: path.join(__dirname, 'public'),
    prefix: '/'
});

site.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.type('text/html').send(`
        <h1>Caso apareceu aqui acesse algum dos servicos</h1>
        <p><a href="index.html">Cadastro de Produtos</a></p> 
        <p><a href="pessoa.html">Cadastro de Pessoa</a></p>
         `);
});

site.get('/produto', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [dados] = await conn.query("SELECT * FROM produto");
        reply.status(200).send(dados);
    } catch (erro: any) {
        tratarErro(erro, reply);
    }
});

site.post('/produto', async (request: FastifyRequest, reply: FastifyReply) => {
    const { nome, preco, vendedor } = request.body as any;
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [result]: any = await conn.query(
            "INSERT INTO produto (nome, preco, vendedor) VALUES (?, ?, ?)",
            [nome, preco, vendedor]
        );
        reply.status(200).send({
            id: result.insertId,
            nome,
            preco,
            vendedor
        });
    } catch (erro: any) {
        tratarErro(erro, reply);
    }
});

site.get('/pessoa', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [dados] = await conn.query("SELECT id, nome, email, telefone, genero FROM pessoa");
        reply.status(200).send(dados);
    } catch (erro: any) {
        tratarErro(erro, reply);
    }
});

site.post('/pessoa', async (request: FastifyRequest, reply: FastifyReply) => {
    const { nome, email, senha, telefone, genero } = request.body as any;
    try {
        const conn = await mysql.createConnection(dbConfig);
        const [result]: any = await conn.query(
            "INSERT INTO pessoa (nome, email, senha, telefone, genero) VALUES (?, ?, ?, ?, ?)",
            [nome, email, senha, telefone, genero]
        );
        reply.status(200).send({
            id: result.insertId,
            nome,
            email,
            telefone,
            genero
        });
    } catch (erro: any) {
        tratarErro(erro, reply);
    }
});

function tratarErro(erro: any, reply: FastifyReply) {
    if (erro.code === 'ECONNREFUSED') {
        console.log("ERRO: O LARAGON ESTÁ LIGADO?");
        reply.status(400).send({ mensagem: "ERRO: LIGUE O LARAGON => Conexão Recusada" });
    } else if (erro.code === 'ER_BAD_DB_ERROR') {
        console.log("ERRO: BANCO DE DADOS NÃO EXISTE");
        reply.status(400).send({ mensagem: "ERRO: BANCO NÃO EXISTE" });
    } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
        console.log("ERRO: USUÁRIO OU SENHA INVÁLIDOS");
        reply.status(400).send({ mensagem: "ERRO: USUÁRIO OU SENHA INVÁLIDOS" });
    } else if (erro.code === 'ER_NO_SUCH_TABLE') {
        console.log("ERRO: TABELA NÃO EXISTE");
        reply.status(400).send({ mensagem: "ERRO: TABELA NÃO EXISTE" });
    } else if (erro.code === 'ER_PARSE_ERROR') {
        console.log("ERRO: ERRO DE SINTAXE NA QUERY");
        reply.status(400).send({ mensagem: "ERRO: ERRO DE SINTAXE NA QUERY" });
    } else if (erro.code === 'ER_DUP_ENTRY') {
        console.log("ERRO: ID DUPLICADO");
        reply.status(400).send({ mensagem: "ERRO: ID DUPLICADO" });
    } else {
        console.log(erro);
        reply.status(500).send({ mensagem: "ERRO: NÃO IDENTIFICADO" });
    }
}

site.listen({ port: 8002 }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server rodando em ${address}`);
});
