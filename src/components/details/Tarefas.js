import excluir from "../assets/remover.png";
import editar from "../assets/editar.png";
import "./tarefas.component.css";
import Pop from "../layout/Pop";

function Tarefas({ descricao }) {
  return (
    <div className="concluir">
      <div className="botoes">
        <Pop
          imagem={<img src={editar} alt="editar" />}
          titulo="Editar"
          content={<input type="text" placeholder="Atividade" />}
          content2={<input type="date" />}
          enviar="enviar"
          cancelar="cancelar"
        />
        <Pop
          imagem={<img src={excluir} alt="excluir" />}
          titulo="Excluir"
          content={<p>Tem certeza que deseja excluir essa atividade?</p>}
          enviar="sim"
          cancelar="não"
        />
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
