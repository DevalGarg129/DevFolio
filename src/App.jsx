import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";

import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Section from "./Pages/Section";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      {/* Navbar always on top */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/section" element={<Section />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
