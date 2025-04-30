// CONEXÃO COM O BANCO
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "empresa"
});

connection.connect((err) => {
    if(err)
    {
        console.error("Erro ao conectar ao MySQL: ", err);
    }
    console.log("Conectado no MySQL com sucesso!: ");
});

module.exports = connection;