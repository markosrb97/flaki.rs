import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Category from '../components/Category';
import Dog from '../pages/Dog';

function Home() {
  return (
    <>
    <Router>
    <Category />
      <Switch>
        <Route path='/Dog' component={Dog}>test</Route>
      </Switch>
    </Router>
    
    </>
  );
}

export default Home;
