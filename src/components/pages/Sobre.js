import React, { Component } from "react";
import Home from "../pages/Home";
import Slide from "../layout/Slide";
import Atividades from "../assets/atividade.png";
import Tarefas from "../assets/tarefas.png";
import Perfil from "../assets/perfil.png";
import "./sobre.component.css";

function Sobre() {
  return (
    <>
      <Home></Home>
      <div className="view">
        <div className="container-sobre">
          <Slide color1="gray" color2="green" color3="gray" />
          <div className="texto-principal">
            <p>
              Gerenciador de lista de tarefas (ToDo list), registre tarefas e
              compartilhe sua rotina de uma forma segura e eficiente.
            </p>
          </div>
          <div className="sobre">
            <p>o que posso fazer no NoteX?</p>
            <div className="sobre-box">
              <div className="box atividades">
                <div className="title">
                  <p>cadastrar atividades</p>
                  <img src={Atividades} alt="atividades"></img>
                </div>
                <div className="descricao">
                  <p>
                    Adicione atividades, edite, exclua e marque como concluída,
                    tudo isso em um só lugar.
                  </p>
                </div>
              </div>
              <div className="box tarefas">
                <div className="title">
                  <p>programe tarefas</p>
                  <img src={Tarefas} alt="tarefas"></img>
                </div>
                <div className="descricao">
                  <p>
                    adicione tarefas e visualize o seu calendário completo com
                    todos os compromissos.
                  </p>
                </div>
              </div>
              <div className="box perfil">
                <div class="title">
                  <p>personalize seu perfil</p>
                  <img src={Perfil} alt="perfil"></img>
                </div>
                <div className="descricao">
                  <p>
                    você pode modificar seu perfil para que fique mais adequado
                    ao seu estilo!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
