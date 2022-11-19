const express = require('express');
const rota = express.Router();
const Login = require('../model/login');
const auth = require('../middlewares/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/config');

//Funções de autenticação
const createUserToken = (userId) => {
    return jwt.sign({id: userId}, config.jwt_verf, {expiresIn: config.jwt_expires_in});
}

rota.get('/', async (req, res) => {
    try {
        const login = await Login.find({});
        return res.send(login);
    }
    catch {
        return res.status(500).send({error: 'Erro na consulta de usuários!'});
    }
});

rota.post('/cadastrar', async (req, res) => {
    const {email, nome, idade, genero, senha} = req.body;

    if (!email || !nome || !idade || !genero || !senha) return res.send({error: 'Dados insuficientes!'});

    try {
        if (await Login.findOne({email})) return res.send({error: 'Usuário já existe!'});

        const user = await Login.create(req.body);
        user.senha = undefined;
        return res.status(201).send({user, token: createUserToken(user.id)});
    }
    catch (err){
        return res.status(500).send({error: 'Erro ao buscar usuário!'});
    }
});

rota.post('/auth', async (req, res) => {
    const {email, senha} = req.body;

    if (!email || !senha) return res.send({error: 'Dados insuficientes!'});

    try {
        const login = await Login.findOne({email}).select('+senha');
        if (!login) return res.status(400).send({error: 'Usuário não existe!'});

        const senha_correta = await bcrypt.compare(senha, login.senha);

        if (!senha_correta) return res.status(401).send({error: 'Erro ao autenticar usuário!'});

        login.senha = undefined;
        return res.status(201).send({login, token: createUserToken(login.id)});
    }
    catch (err){
        return res.status(500).send({error: 'Erro ao buscar usuário!'});
    }
});

//atualização de usuários
rota.put('/editar', async (req, res) =>{
    const {email, nome, idade, senha} = req.body;

    if (!email || !senha) return res.send({error: 'Dados insuficientes!'});

    try {
        const login = await Login.findOne({email}).select('+senha');
        if (!login) return res.status(400).send({error: 'Usuário não existe!'});

        const senha_correta = await bcrypt.compare(senha, login.senha);

        if (!senha_correta) return res.status(401).send({error: 'Erro ao autenticar usuário!'});

        await Login.findOneAndUpdate({email}, {nome, idade});

        return res.status(200).send({message: 'Usuário atualizado com sucesso!'});
    }
    catch (err) {
        return res.status(404).send({error: 'Erro ao atualizar usuário!'});
    }
});
module.exports = rota;