import './App.css';
import Home from './pages/index';
import SignIn from './pages/signin';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
      <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/signin" component={SignIn} exact/>
      </Switch>
    </Router>
  );
}

export default App;
