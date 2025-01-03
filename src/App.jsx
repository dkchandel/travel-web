import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";
import Rightbar from "./components/Rightbar";
import { data, data2 } from "./Data";

const App = () => {
  const [bgColor, setbgColor] = useState("#232D3f");
  const [color, setColor] = useState("white");
  const [toggle, setToggle] = useState(true);

  // Set basename depending on the environment
  const basename = process.env.NODE_ENV === "production" ? "/react-travel" : "";

  const toggleButton = () => {
    setToggle(!toggle);
    if (toggle) {
      setbgColor("rgb(255,255,255)");
      setColor("black");
      document.querySelector("body").style.backgroundColor = "#cbc5c5";
    } else {
      setbgColor("#232D3f");
      setColor("white");
      document.querySelector("body").style.backgroundColor = "black";
    }
  };

  return (
    <Router basename={basename}>
      <Navbar bgColor={bgColor} color={color} toggleButton={toggleButton} toggle={toggle} />
      <div className="container">
        <div className="side_bar">
          <Sidebar bgColor={bgColor} color={color} toggleButton={toggleButton} />
        </div>
        <div className="post_section">
          {data.map((d) => (
            <Post key={d.id} data={d} bgColor={bgColor} color={color} toggleButton={toggleButton} />
          ))}
        </div>
        <div className="right_bar">
          {data2.map((d) => (
            <Rightbar key={d.id} data={d} bgColor={bgColor} color={color} toggleButton={toggleButton} />
          ))}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/about" element={<div>About Page</div>} />
      </Routes>
    </Router>
  );
};

export default App;
