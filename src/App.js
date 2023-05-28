import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Register from "./Pages/Register";
import Signin from "./Pages/Signin";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Register />} />
          <Route path="/register" element={<Register />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
