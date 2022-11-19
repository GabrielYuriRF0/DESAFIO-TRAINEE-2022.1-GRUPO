import PaginaPrincipal from "./PaginaPrincipal";
import BoxCalendario from "../details/BoxCalendario";
import Tarefas from "../details/Tarefas";
import TarefasFinalizadas from "../details/TarefasFinalizadas";
import verde from "../assets/calendario1.png";
import roxo from "../assets/calendairo2.png";
import laranja from "../assets/calendario3.png";
import adicionar from "../assets/adicionar.png";

import "./todo.component.css";
import "./global.component.css";

function ToDo() {
  return (
    <div className="container-todo">
      <PaginaPrincipal />
      <div className="content-todo">
        <div class="principais">
          <BoxCalendario
            color="verde"
            imagem={verde}
            titulo="19 de Nov."
            descricao="entrega - segunda fase CodeX"
          />
          <BoxCalendario
            color="roxo"
            imagem={roxo}
            titulo="25 de Nov."
            descricao="prova de fmcc"
          />
          <BoxCalendario
            color="laranja"
            imagem={laranja}
            titulo="12 de Dez."
            descricao="Atividade de português"
          />
        </div>
        <div className="atividades-todo">
          <div className="pendentes">
            <div className="titulo">
              <p>atividades pendentes</p>
              <button>
                <img src={adicionar} alt="adicionar" />
              </button>
            </div>
            <div className="atividades-pendentes">
              <Tarefas descricao="Atividade de IC" />
            </div>
          </div>
          <div className="concluidas">
            <div className="titulo">
              <p>concluídas</p>
            </div>

            <div className="lista">
              <TarefasFinalizadas descricao="miniteste" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
