import Input from "./Input";
import email from "../assets/user.png";
import senha from "../assets/senha.png";
import Button from "../details/Buttons";

function BoxLogin() {
  return (
    <>
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
          <Button text="entrar" classColor="pink" />
          <p>Esqueci a senha</p>
        </div>
      </div>
    </>
  );
}

export default BoxLogin;
