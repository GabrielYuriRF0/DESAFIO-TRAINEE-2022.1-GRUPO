import "./menu.component.css";
import logo from "../assets/logo.png";
import principal from "../assets/principal.png";
import calendario from "../assets/calendario.png";
import configuracoes from "../assets/configuracoes.png";
import sair from "../assets/sair-branco.png";
import Button from "../details/Buttons";

function Menu() {
  return (
    <div className="menu-home">
      <div className="menu-conteudo">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="ferramentas">
          <Button to="/todolist" text={<img src={principal} alt="logo" />} />
          <Button to="/calendario" text={<img src={calendario} alt="logo" />} />
          <Button
            to="/configuracoes"
            text={<img src={configuracoes} alt="logo" />}
          />
        </div>
        <div className="sair">
          <Button to="/" text={<img src={sair} alt="logo"></img>} />
        </div>
      </div>
    </div>
  );
}

export default Menu;
