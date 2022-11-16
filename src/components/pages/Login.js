import HomeForm from "../pages/HomeForm";
import BoxLogin from "../details/BoxLogin";
import "./login.component.css";

function Sobre() {
  return (
    <>
      <HomeForm></HomeForm>
      <div className="view">
        <BoxLogin />
      </div>
    </>
  );
}

export default Sobre;
