import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import "./_base.scss";
import "./_layout.scss";
import Navbar from "./Components/Navbar";
import Container from "./Components/container";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Container />
    </div>
  );
}

export default App;
