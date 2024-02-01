import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import SigninPage from "./components/SigninPage";
import Gallery from "./components/Gallery";
import CreateAccount from "./components/CreateAccount";
import UpdateMovie from "./components/UpdateMovie";
import AddMovie from "./components/AddMovie";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div className="mainContainer">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<CreateAccount />} />
          <Route path="/login" element={<SigninPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/update/:id" element={<UpdateMovie />} />
          <Route path="/addMovie" element={<AddMovie />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
