import "./input.component.css";

function Input({ texto, imagem, classInput, classButton }) {
  return (
    <div className="input">
      <label>{texto}</label>
      <div className="input-button">
        <button className={classButton}>
          <img src={imagem} alt="ícone" />
        </button>
        <input type="text" className={classInput} />
      </div>
    </div>
  );
}

export default Input;
