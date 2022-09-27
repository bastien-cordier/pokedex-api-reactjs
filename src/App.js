import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pokedex from "./pages/Pokedex";
import "./App.scss";

function App() {
  return (
    <div className="App bg-slate-100 dark:bg-slate-600">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
