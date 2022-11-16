import PaginaPrincipal from "./PaginaPrincipal";
import usuario from "../assets/usuario.png";
import Button from "../details/Buttons";
import "./configuracoes.component.css";

function Configuracoes() {
  return (
    <div className="configuracoes">
      <PaginaPrincipal />
      <div className="menu-configuracoes">
        <div className='tamanho'>
        <div className="principal">
          <img src={usuario} alt="usuario"></img>
          <div className="texto-configuracoes">
            <h2>nomedeusuario</h2>
            <p> 10 atividades concluídas</p>
          </div>
        </div>
        <div className="input-configuracoes">
          <div className="grupo">
            <div className="input">
              <label>Usuário</label>
              <input type="text" />
            </div>
            <div className="input">
              <label>Idade</label>
              <input type="text" />
            </div>
          </div>
          <div className="input">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="input">
            <label>Senha</label>
            <input type="text" />
          </div>
        </div>
        <div className="botoes">
          <Button text="enviar" classColor="green" />
          <Button text="cancelar" classColor="blue" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Configuracoes;
