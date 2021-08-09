import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Homes from './Pges/Homes';
import About from './Pges/About'
import  Nav from './componenets/Nav'

function App() {
  return (
    <div className="App">
       <>
       <Router>
              <Nav/>
          <Switch>
               <Route path="/" component={Homes} exact></Route>
             <Route path="/about" component={About} exact></Route>

     
         </Switch>
       </Router>
       </>
    </div>
  );
}

export default App;
