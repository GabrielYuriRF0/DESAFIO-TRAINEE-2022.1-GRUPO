import Input from "./Input";
import user from "../assets/user.png";
import senha from "../assets/senha.png";
import email from "../assets/email.png";
import calendário from "../assets/calendário.png";
import genero from "../assets/genero.png";
import Button from "../details/Buttons";
import axios from "axios";
import { useState } from "react";

function BoxCadastro() {

  const [users, setUsers] = useState({
    nome: "",
    email: "",
    idade: "",
    genero: "",
    senha: ""
  });

  function handleChange(event) {
    users[event.target.name] = event.target.value;
    setUsers(users);
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios.post('http://localhost:3001/users/cadastrar', users)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    
  }

  return (
    <>
      <div className="box-cadastro">
        <div className="titulo">
          <p>cadastro</p>
        </div>
        <form onChange={handleSubmit}>
          <div className="forms">
            <div className="formulario-cadastro">
              <div className="box-formulario">
                <div className="box-input">
                  <Input onChange={handleChange} name="nome" id="nome" texto="nome completo" imagem={user} classInput="texto" />
                  <Input onChange={handleChange} name="email" id="email" texto="email" imagem={email} classInput="texto" />
                  <div className="two-input">
                    <Input onChange={handleChange} name="idade" id="idade" texto="idade" imagem={calendário} classInput="texto" />
                    <Input onChange={handleChange} name="genero" id="genero" texto="gênero" imagem={genero} classInput="texto" />
                  </div>
                  <Input onChange={handleChange} name="senha" id="senha" texto="senha" imagem={senha} classInput="texto" />
                </div>
                <div className="botoes-cadastro">
                  <Button text="cadastrar" classColor="pink" to="/todolist" type="submit" />
                  <input id="checkbox1" class="checkbox" type="checkbox" />
                  <label for="checkbox1"></label>
                  <p>Aceito os termos de serviço e privacidade</p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default BoxCadastro;
