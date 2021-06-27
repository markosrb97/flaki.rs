import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
/* Pages */
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Register from './pages/Register1';
/*Components */
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
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
      <Footer />
      
    </div>
  );
}

export default App;
