import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/home";
import Contact from "./Pages/Contact/contact";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              </Routes>
        </BrowserRouter>{" "}
      </div>
  );
}

export default App;
