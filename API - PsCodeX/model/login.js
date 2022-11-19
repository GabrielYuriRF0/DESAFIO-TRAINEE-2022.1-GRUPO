const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const LoginSchema = new Schema({
    email: {type: String, required: true, unique: true, lowercase: true},
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    genero: {type: String, required: true},
    senha: {type: String, required: true, select: false},
    criado: {type: Date, default: Date.now}
});

LoginSchema.pre('save', async function (next) {
    let login = this;
    if (!login.isModified('senha')) return next();

    login.senha = await bcrypt.hash(login.senha, 10)
    return next();
});

module.exports = mongoose.model('Login', LoginSchema);