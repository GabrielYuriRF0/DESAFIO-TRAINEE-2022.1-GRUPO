import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Sobre from "./components/pages/Sobre";
import FaleConosco from "./components/pages/FaleConosco";
import Main from "./components/layout/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/sobre" element={<Sobre />} />
        <Route exact path="/fale-conosco" element={<FaleConosco />} />
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
