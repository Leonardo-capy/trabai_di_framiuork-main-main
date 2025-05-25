CREATE DATABASE trabalho_catalogo;

USE trabalho_catalogo;

CREATE TABLE produto (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    preco DECIMAL(10,2),
    vendedor VARCHAR(255)
);

CREATE TABLE pessoa (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nome VARCHAR(100) NOT NULL, 
    email VARCHAR(100) NOT NULL, 
    senha VARCHAR(100) NOT NULL, 
    telefone VARCHAR(20) NOT NULL, 
    genero VARCHAR(20) NOT NULL
);
