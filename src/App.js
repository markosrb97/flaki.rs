import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Pages */
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Register from './pages/Register';
/*Components */
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/o-nama' component={AboutUs}></Route>
          <Route path='/kontakt' component={Contact}></Route>
          <Route path='/register' component={Register}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
