import { Routes, Route } from "react-router-dom";

import MyNavbar from "./Components/MyNavbar";
import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import About from "./Pages/About";
import Section from "./Pages/Section";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      {/* Navbar always on top */}
      <MyNavbar />

      {/* Add spacing below navbar */}
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/section" element={<Section />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
