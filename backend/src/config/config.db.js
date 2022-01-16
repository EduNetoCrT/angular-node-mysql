const { use } = require('express/lib/application');
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password: 'Senha@edu9125',
    database: 'simpledb',
    port: 3306
});

//checar a conexão com o banco de dados
db.connect(err => {
    if(err){console.log(err,'dberr')}
    else
    console.log('database conectado')
})

module.exports = db;