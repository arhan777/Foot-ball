import './App.css';
import Home from './Pages/Home.js';
import Profile from './Pages/Profile.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import data from './csvjson.json';

function App() {
  console.log(data);
  return (
    <Router>
      <Switch>
        <Route path="/:playerName">
          <Profile />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
