import Input from "./Input";
import user from "../assets/user.png";
import senha from "../assets/senha.png";
import email from "../assets/email.png";
import calendário from "../assets/calendário.png";
import genero from "../assets/genero.png";
import Button from "../details/Buttons";

function BoxCadastro() {
  return (
    <>
      <div className="box-cadastro">
        <div className="titulo">
          <p>cadastro</p>
        </div>
        <div className="forms">
          <div className="formulario-cadastro">
            <div className="box-formulario">
              <div className="box-input">
                <Input texto="nome completo" imagem={user} classInput="texto" />
                <Input texto="email" imagem={email} classInput="texto" />
                <div className="two-input">
                  <Input texto="idade" imagem={calendário} classInput="texto" />
                  <Input texto="gênero" imagem={genero} classInput="texto" />
                </div>
                <Input texto="senha" imagem={senha} classInput="texto" />
              </div>
              <div className="botoes">
                <Button text="cadastrar" classColor="pink" to="/todolist" />
                <input id="checkbox1" class="checkbox" type="checkbox" />
                <label for="checkbox1"></label>
                <p>Aceito os termos de serviço e privacidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxCadastro;
