import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Photography from "./pages/Photography";
import WebDev from "./pages/WebDev";

function App() {
  return (
    <div className="App">
      <Router>
        <Home />
        <Switch>
          <Route exact path="/" page={Home} />
          <Route exact path="/home" page={Home} />
          <Route exact path="/webdevelopment" page={WebDev} />
          <Route exact path="/photogrpahy" page={Photography} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
