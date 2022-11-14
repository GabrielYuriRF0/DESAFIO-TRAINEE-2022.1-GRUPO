import "./boxcalendario.component.css";

function BoxCalendario({ color, imagem, titulo, descricao }) {
  return (
    <div className={color}>
      <div className="imagem">
        <img src={imagem} alt="img"></img>
      </div>
      <div className="texto">
        <div className="titulo">
          <p>{titulo}</p>
        </div>
        <div className="descricao">
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  );
}

export default BoxCalendario;
