import "./menu.component.css";
import logo from "../assets/logo.png";
import principal from "../assets/principal.png";
import calendario from "../assets/calendario.png";
import configuracoes from "../assets/configuracoes.png";
import sair from "../assets/sair-branco.png";

function Menu() {
  return (
    <div className="menu-home">
      <div className="menu-conteudo">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="ferramentas">
          <button>
            <img src={principal} alt="logo" />
          </button>
          <button>
            <img src={calendario} alt="logo" />
          </button>
          <button>
            <img src={configuracoes} alt="logo" />
          </button>
        </div>
        <div className="sair">
          <button>
            <img src={sair} alt="logo"></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Menu;
