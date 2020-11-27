import React from "react";
import "./App.css";
import backImg from "./images/illustration-box-desktop.svg";
import Grid from "@material-ui/core/Grid";
import Accordion from "./Accordion";
import mobileWomanImg from "./images/illustration-woman-online-mobile.svg";

const App = () => {
  return (
    <Grid container justify="center">
      <Grid item md={8} xs={12}>
        <div className="box">
          <img className="box-img" src={backImg} />
          <img className="mobile-woman-img" src={mobileWomanImg} />
          <div className="app">
            <div style={{ marginTop: "60px" }}>
              <h1 style={{ textAlign: "right", marginRight: "418px" }}>FAQ</h1>
              <Accordion className="accordion" />
            </div>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

export default App;
