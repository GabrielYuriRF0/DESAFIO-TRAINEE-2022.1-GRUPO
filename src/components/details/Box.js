import "./box.component.css";
import BoxLogin from "./BoxLogin";
import boxCadastro from "./box-cadastro";
import imagemLogo from "../assets/login.png";

function Box({ titulo, login, cadastro }) {
  return (
    <div className="box">
      <div className="titulo">
        <p>{titulo}</p>
      </div>
      <div className="forms">
        <BoxLogin className={login} />
        <boxCadastro className={cadastro} />
      </div>
    </div>
  );
}

export default Box;
