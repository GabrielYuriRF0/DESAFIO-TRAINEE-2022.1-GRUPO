import "./home.component.css";
import logo from "../assets/logo.png";
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
          <button>home</button>
          <button>sobre</button>
          <button>fale conosco</button>
        </div>
      </div>
      <div className="slide">
        <div className="slide-1">
          <button className="button"></button>
        </div>
        <div className="slide-2">
          <button className="button"></button>
        </div>
        <div className="slide-3">
          <button className="button"></button>
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
