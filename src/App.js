import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Header from "./routes/Header";
import Footer from "./routes/Footer";
import Navigation from "./routes/Navigation";
import "./App.css";
import "./Style.css";
const flexStyle = {
  display:"flex",
  flexDirection:"column",
  justifyContent:"center"
}
const style = {
  alignSelf:"flex-end"
}
function App() {
  return (
    <div className="container" style={flexStyle}>
      <Header style={style}></Header>
      <HashRouter style={style}>
        <Navigation></Navigation>
        <Route path="/" exact={true} component={Home}></Route>
        <Route path="/about" component={About}></Route>
      </HashRouter>
      <Footer style={style}></Footer>
    </div>
  );
}

export default App;
