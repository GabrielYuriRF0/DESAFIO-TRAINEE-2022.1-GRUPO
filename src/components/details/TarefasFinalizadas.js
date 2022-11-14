import "./tarefasfinalizadas.component.css";

function TarefasFinalizadas({ descricao }) {
  return (
    <div className="tarefas-finalizadas">
      <input id="checkbox2" class="checkbox" type="checkbox" checked />
      <label for="checkbox2"></label>
      <p>{descricao}</p>
    </div>
  );
}

export default TarefasFinalizadas;
