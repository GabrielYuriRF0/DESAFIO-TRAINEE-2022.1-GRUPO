import "./home.component.css";
import logo from "../assets/logo.png";
import Button from "../details/Buttons";
import sair from "../assets/sair.png";
import "./global.component.css";
import "./home.component.css";

function Home() {
  return (
    <div className="home">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h1>NoteX</h1>
        </div>
        <div className="menu-opcoes">
          <Button to="/" text={<img src={sair} alt="logo"></img>}></Button>
        </div>
      </div>
      <div className="footer">
        <footer>
          © 2022 Processo seletivo CodeX - Todos os direitos reservados.
        </footer>
      </div>
    </div>
  );
}

export default Home;
