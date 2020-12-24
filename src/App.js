//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, HashRouter, Switch, Route } from "react-router-dom"
import user from "./components/user"

function App() {
  return (
    <Router>
    <HashRouter>
      <Switch>
        <Route path="/" exact component={user} />
       
        {/* <Route component={Error} /> */}
      </Switch>
    </HashRouter>
  </Router>
  );
}

export default App;
