import React from "react";
import {Routes, Route, Link } from "react-router-dom";
import Formulario from "./components/Formulario";
import Header from "./components/Header";
import Home from "./components/Home";
import Ilustraciones from "./components/Ilustraciones";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Formulario />} />
        <Route path="/ilustraciones" element={<Ilustraciones />} />
        
        <Route path='*' element={<NotFound />} />
      </Routes>

    </div>
  );
}

export default App;
