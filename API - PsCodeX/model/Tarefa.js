const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TarefaSchema = new Schema({
    nome: {type: String, required:true},
    descricao: {type:String, lowercase:true},
    data: {type:Date, default:Date.now},
    concluida:{type:Boolean, default:false},
    usuario:{type: mongoose.ObjectId, ref: 'Login', required:true}
});

module.exports = mongoose.model('Tarefa', TarefaSchema, 'tarefas');
