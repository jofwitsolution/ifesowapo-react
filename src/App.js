import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.scss";
import { Footer, Navbar, Sidebar } from "./components";
import { Home, About } from "./pages";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <div className="jof__app">
      <Navbar setToggleSidebar={setToggleSidebar} />
      <Sidebar
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      />

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
