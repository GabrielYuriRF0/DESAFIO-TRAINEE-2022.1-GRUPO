import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cadastro from "./components/pages/Cadastro";
import Login from "./components/pages/Login";
import Calendario from "./components/pages/Calendário";
import Configuracoes from "./components/pages/Configuracoes";
import ToDo from "./components/pages/ToDo";
import Sobre from "./components/pages/Sobre";
import FaleConosco from "./components/pages/FaleConosco";
import Main from "./components/layout/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/faleconosco" element={<FaleConosco />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cadastro" element={<Cadastro />} />
        <Route exact path="/todolist" element={<ToDo />} />
        <Route exact path="/calendario" element={<Calendario />} />
        <Route exact path="/configuracoes" element={<Configuracoes />} />
      </Routes>
    </Router>
  );
}

export default App;
