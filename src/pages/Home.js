import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from '../components/Category';
import dog from '../pages/Dog';
import cat from '../pages/Cat';
import bird from '../pages/Bird';
import rabbit from '../pages/Rabbit';
import fish from '../pages/Fish';
import rodent from '../pages/Rodent';
import reptil from '../pages/Reptil';
import domesticAnimal from '../pages/DomesticAnimal';
import arthropod from '../pages/Arthropod';

function home() {
  return (
    <>
    <Category />
    <Router>
      <Switch>
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
    
    </>
  );
}

export default home;
