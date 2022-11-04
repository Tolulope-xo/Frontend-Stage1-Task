import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home/home";
import Contact from "./Components/Pages/Contact/contact";
import Footer from "./Components/Footer/footer";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              </Routes>
          <Footer/>
        </BrowserRouter>{" "}
      </div>
  );
}

export default App;
