import "./main.component.css";
import Button from "../details/Buttons";
import Home from "../pages/Home";
import Slide from "../layout/Slide";
import imageHome from "../assets/image-page1.png";

function Main() {
  return (
    <>
      <Home></Home>
      <div className="view">
        <div className="container">
          <Slide color1="green" color2="gray" color3="gray" />
          <div className="content-main">
            <div className="textos">
              <div className="title">
                <p>
                  a melhor forma de <br />
                  organizar suas atividades.
                </p>
              </div>
              <div className="subtitle">
                <p>Simples, prático e eficiente. </p>
              </div>
            </div>
            <div className="buttons">
              <Button text="criar conta" classColor="green" to="/cadastro" />
              <Button text="entrar" classColor="blue" to="/login" S />
            </div>
          </div>
          <div className="image">
            <img src={imageHome} alt="logo"></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
