import * as React from "react";
import Home from "./pages/home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Brewery from "./pages/brewery";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      center: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const App: React.FC = () => {
  return (
    <div className="container pb-4">
      <center>
        <img
          src="http://images2.fanpop.com/images/photos/8300000/Beer-root-beer-8321692-250-250.gif"
          alt="Logo"
        />
      </center>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/brewery-details">
            <Brewery />
          </Route>
          <Redirect exact to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
