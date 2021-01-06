import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App;
