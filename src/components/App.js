import React from "react";
import Header from "./Header";
import StudentPage from "./StudentPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./NavBar";
import Contact from "./Contact";
import About from "./About";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<StudentPage />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
