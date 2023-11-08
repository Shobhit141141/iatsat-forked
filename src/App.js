import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Globalprincipal from "./pages/Globalprincipal";
import Olympiad from "./pages/Olympiad";

export default function App() {
  return (
    <div className="App">
      <Routes>

       

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/globalprincipal" element={<Globalprincipal />} />
          <Route path="/olympiad" element={<Olympiad />} />

       
      </Routes>
    </div>
  );
}
