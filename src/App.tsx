import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Book from "./pages/Book";
import Sessions from "./pages/Sessions";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MobileNav from "./components/MobileNav";
import { useEffect, useState } from "react";
import Headroom from "react-headroom";
import ScrollToTop from "./components/ScrollReset";

function App() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 768;

  return (
    <Router basename="/aire-tc">
      <ScrollToTop />
      <Headroom>{isMobile ? <MobileNav /> : <NavBar />}</Headroom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<Book />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
