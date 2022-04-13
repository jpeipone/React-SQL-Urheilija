import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Urheilijantieto from "./components/Urheilijantieto";
import Urheilijantiedot from "./components/Urheilijantiedot";
import Ylatunniste from "./components/Ylatunniste";
import Tietoa from "./components/pages/Tietoa";
import LisaaUrheilijantieto from "./components/LisaaUrheilijantieto";
import MuokkaaUrheilijantieto from "./components/MuokkaaUrheilijantieto";

import "bootstrap/dist/css/bootstrap.min.css";

import GlobalState from "./context/GlobalState";

function App() {
  return (
    <GlobalState>
      <Router>
        <div className="App">
          <Ylatunniste turvataso="keskisuuri" />
          <div className="container">
            <Routes>
              <Route path="/" element={<Urheilijantiedot />} />
              <Route
                path="/urheilijantieto/lisaa"
                element={<LisaaUrheilijantieto />}
              />
              <Route
                path="/puhelintieto/muokkaa/:id"
                element={<MuokkaaUrheilijantieto />}
              />
              <Route path="/tietoa" element={<Tietoa />} />
            </Routes>
          </div>
        </div>
      </Router>
    </GlobalState>
  );
}

export default App;
