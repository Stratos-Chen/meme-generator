import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "./Header";
import MemeGenerator from "./MemeGenerator";
import EditMeme from "./EditMeme";
import MemeList from "./MemeList";
import Navigation from "./Navigation";
import TestPage from "./components/TestPage";
import "./style.css"

// import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Navigation />
          <Switch>
            <Route path="/memegenerator" component={MemeGenerator} />
            <Route path="/editmeme" component={EditMeme} />
            <Route path="/memelist" component={MemeList} />
            <Route path="/testpage" component={TestPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
