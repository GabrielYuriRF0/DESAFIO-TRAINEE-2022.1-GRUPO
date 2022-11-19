import Input from "./Input";
import email from "../assets/user.png";
import senha from "../assets/senha.png";
import Button from "../details/Buttons";

function BoxLogin() {
  return (
    <>
      <div className="box-login">
        <div className="titulo">
          <p>login</p>
        </div>
        <div className="forms">
          <div>
            <div className="box-formulario">
              <div className="box-input">
                <Input
                  texto="email ou nome de usuário"
                  imagem={email}
                  classInput="texto"
                />
                <Input texto="senha" imagem={senha} classInput="texto" />
              </div>
              <div className="botoes">
                <Button text="entrar" classColor="pink" to="/todolist" />
                <p>Esqueci a senha</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BoxLogin;
