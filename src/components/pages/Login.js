import HomeForm from "../pages/HomeForm";
import Box from "../details/Box";
import "./login.component.css";

function Sobre() {
  return (
    <>
      <HomeForm></HomeForm>
      <div className="view">
        <Box titulo="login" login="enable" cadastro="disable"></Box>
      </div>
    </>
  );
}

export default Sobre;
