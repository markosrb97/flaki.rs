import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/* Pages */
import Home from './pages/Home';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Register from './pages/Register';
import dog from './pages/Dog.js';
import cat from './pages/Cat.js';
import bird from './pages/Bird.js';
import rabbit from './pages/Rabbit.js';
import fish from './pages/Fish.js';
import rodent from './pages/Rodent.js';
import reptil from './pages/Reptil.js';
import domesticAnimal from './pages/DomesticAnimal.js';
import arthropod from './pages/Arthropod.js';
/*Components */
import Header from './components/Header';
import Carousel from './components/Carousel'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Carousel />
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/login' component={Login}></Route>
          <Route path='/o-nama' component={AboutUs}></Route>
          <Route path='/kontakt' component={Contact}></Route>
          <Route path='/register' component={Register}></Route>
          <Route path='/Psi' component={dog}></Route>
          <Route path='/Mačke' component={cat}></Route>
          <Route path='/Ptice' component={bird}></Route>
          <Route path='/Zečevi' component={rabbit}></Route>
          <Route path='/Ribe' component={fish}></Route>
          <Route path='/Glodari' component={rodent}></Route>
          <Route path='/Reptili' component={reptil}></Route>
          <Route path='/Domaće_Životinje' component={domesticAnimal}></Route>
          <Route path='/Zglavkari' component={arthropod}></Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
