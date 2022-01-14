import Home from "./pages/home/Home";
import MainPage from "./pages/home/MainPage";

import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Footer from "../src/components/footer/Footer";
import Header from "../src/components/header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Slider from "./components/slider/Slider";
import FavPro from "../../offer-ui/src/components/favProducts/FavPro.jsx"

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes path="/" exact element={<MainPage />}>
          <Route path="/product" exact element={<Home />} />
          <Route path="/" exact element={<MainPage />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/Favourute-product" exact element={<FavPro />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
