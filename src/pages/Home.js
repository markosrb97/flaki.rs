import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from '../components/Category';
import Dog from '../pages/Dog';

function Home() {
  return (
    <>
    <Category />
    <Router>
      <Switch>
        <Route path='/dog' component={Dog}></Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default Home;
