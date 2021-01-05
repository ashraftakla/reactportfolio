import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Contact from "./pages/contact"
function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;
