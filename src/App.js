import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Portfolio from "./pages/portfolio"
import Contact from "./pages/contact"
import Navbar from "./pages/navbar"
import About from "./pages/about"
function App() {
  return (
    <Router>

      <Switch>
        <div>
          <Navbar />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/about" component={About} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
