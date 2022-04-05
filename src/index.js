import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import About from "./pages/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./css/App.css";

ReactDOM.render(
  <Router>
    <nav>
      <Link id="List" to="/">
        Home
      </Link>
      <Link id="List" to="/about">
        About
      </Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/About" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
