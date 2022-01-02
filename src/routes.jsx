import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/home";
import Skills from "./components/pages/skills/skills";
import Experience from "./components/pages/experience/experience";
import Education from "./components/pages/education/education";
import Portfolio from "./components/pages/portfolio/portfolio";
import Details from "./components/pages/education/details";


const RouteComponent = () => {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/skills" component={Skills} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/education/details" component={Details} />
        </Switch>
      </>
    </Router>
  );
};

export default RouteComponent;
