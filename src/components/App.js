import React from "react";
import Header from "./Header";
import StudentsPagePage from "./StudentPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./NavBar";
import Contact from "./Contact";
import About from "./About"
import StudentPage from "./StudentPage";



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />       
        <div className="content">
          <Routes>
          <Route path="/" element={<StudentPage/>} />
          <Route path = "/Contact" element={<Contact/>}></Route>
          <Route path="/About" element= {<About/>}></Route>
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
