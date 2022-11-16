import excluir from "../assets/remover.png";
import editar from "../assets/editar.png";
import "./tarefas.component.css";

function Tarefas({ descricao }) {
  return (
    <div className="concluir">
      <div className="botoes">
        <button>
          <img src={editar} alt="editar" />
        </button>
        <button>
          <img src={excluir} alt="excluir" />
        </button>
      </div>
      <div className="concluir-descricao">
        <p>{descricao}</p>
      </div>
      <input id="checkbox1" class="checkbox" type="checkbox" />
      <label for="checkbox1"></label>
    </div>
  );
}

export default Tarefas;
