const mongoose = require('mongoose');

async function connect (){
    try{
        await mongoose.connect("mongodb+srv://adm_user:Fzgnp4cXPZuwruUQ@bd-projectcodex.qxkscws.mongodb.net/BD-ProjectCodeX?retryWrites=true&w=majority")
        console.log("Conectou");
   
        
    }catch(error){
        console.log(error)
    };
}
connect();


const Usuario = mongoose.model('Usuario', {
    email: {type: String, required: true, unique: true, lowercase: true},
    nome: {type: String, required: true},
    idade: {type: Number, required: true},
    genero: {type: String, required: true},
    senha: {type: String, required: true, select: false},
    criado: {type: Date, default: Date.now}
  })

async function criarUsuario(user){
    
    try{
        await Usuario.create(user);
        console.log("Usuário criado com sucesso");
    }catch(error){console.log(error)}
    


 }

async function recuperarUsuarios(){
    try{
         const usuarios = await Usuario.find();
         return usuarios;

    }catch(error){console.log(error)}
}

async function recuperarUsuario(email){
    try{
        const usuario = await Usuario.findOne({email:email})
       return usuario;

    }catch(error){console.log(error)}
}
//criarUsuario()
//recuperarUsuarios()