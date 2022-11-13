import HomeForm from "../pages/HomeForm";
import BoxCadastro from "../details/box-cadastro";
import "./cadastro.component.css";

function Sobre() {
  return (
    <>
      <HomeForm></HomeForm>
      <div className="view">
        <BoxCadastro />
      </div>
    </>
  );
}

export default Sobre;
