const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./configs/config');

const bd_link = config.bd_url;

mongoose.connect(bd_link);

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
})  

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados: ' + err);
})

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada ao banco de dados!');
})

//body parser

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const indexRota = require('./Rotas/index');
const userRota = require('./Rotas/users');
const tarefaRota = require('./Rotas/tarefa');

app.use('/', indexRota);
app.use('/users', userRota);
app.use('/tarefa', tarefaRota);

app.listen(3001);

module.exports = app;