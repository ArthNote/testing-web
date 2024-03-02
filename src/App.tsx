
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [isDark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!isDark);
  };

  return (
    <>
      <Router>
        <div data-theme={isDark ? "dark" : "light"}>
          <Navbar handleTheme={handleTheme}/>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/menu" Component={Menu} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
          <Footer/>
        </div>
      </Router>
    </>
  );
}

export default App;
