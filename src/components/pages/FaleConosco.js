import Home from "../pages/Home";
import Slide from "../layout/Slide";
import Input from "../details/Input";
import "./faleconosco.component.css";
import imagem from "../assets/faleconosco.png";
import email from "../assets/user.png";
import messagem from "../assets/mensagem.png";

function Sobre() {
  return (
    <>
      <Home></Home>
      <div className="view">
        <div className="container">
          <Slide color1="gray" color2="gray" color3="green" />
          <div className="conteudo">
            <div className="questionario">
              <p>
                Tem algo importante para contar? Nos escreva um email falando
                tudo!
              </p>
              <Input texto="email:" imagem={email} classInput="texto" />
              <Input
                texto="mensagem:"
                imagem={messagem}
                classInput="mensagem"
                classButton="mensagem-button"
              />
            </div>
            <div className="imagem">
              <img src={imagem} alt="imagem" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sobre;
