import Navbar from './component/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Question from './pages/Question';
import Register from './pages/Register';
import Course from './pages/Courses';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
          <Login></Login>
          </Route>
          <Route path="/register">
          <Register></Register>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/course">
          <Course></Course>
          </Route>
          <Route path="/question">
          <Question></Question>
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
