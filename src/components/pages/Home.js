import "./home.component.css";
import logo from "../assets/logo.png";
import "./global.component.css";
import "./home.component.css";
import Button from "../details/Buttons";

function Home() {
  return (
    <div className="home">
      <div className="menu">
        <div className="logo">
          <img src={logo} alt="logo"></img>
          <h1>NoteX</h1>
        </div>
        <div className="menu-opcoes">
          <Button text="home" to="/" classColor='menu'/>
          <Button text="sobre" to="/sobre" classColor='menu'/>
          <Button text="fale conosco" to="/faleconosco" classColor='menu'/>
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
