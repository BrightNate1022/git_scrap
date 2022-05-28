import React, { Component } from "react";
import ProP from "./Assets/ProfessionalPic.jpg";
// import bg from "./Assets/bg.png"
import "./App.css";
// import scraper from "./helpers/scraper"; 
import Commit from "./componets/CommitSc";
import { pushedAt } from "./helpers/PushedAtS";
// const commitsh = commits
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header mb-5">
          <img src={ProP} className="Prop" alt="logo" />
          <h2 className="d-none d-lg-block my-3">Welcome to my Git Commits page for this Project !</h2>
          <h5 className="d-lg-none my-3">Welcome to my Git Commits page for this Project !</h5>
        </div>

        <Commit />
      </div>
      
    );
  }
}


// console.log(commit)
pushedAt ()
export default App;
