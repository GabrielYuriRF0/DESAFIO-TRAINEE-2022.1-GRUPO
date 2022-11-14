import Menu from "../layout/Menu";
import usuario from "../assets/usuario.png";
import "./global.component.css";
import "./paginaprincipal.component.css";

function PaginaPrincipal() {
  return (
    <div className="view">
      <Menu />
      <div className="menu-usuario">
        <div className="logo-nome">
          <p>NoteX</p>
        </div>
        <div className="nome-usuario">
          <div className="nome">
            <p>Olá, nomedeusuario</p>
          </div>
          <div className="imagem">
            <img src={usuario} alt="usuario"></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginaPrincipal;
