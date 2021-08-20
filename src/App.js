import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Homes from './Pges/Homes';
import About from './Pges/About'
import  Nav from './componenets/Nav'
import Product from './Pges/Product';
import Cart from './Pges/Cart';
import {CartContext} from './CartContext'
import SinglePro from './services/SinglePro';

import {useState,useEffect} from 'react';

function App() {
  //Empty cart
  const [cart,setCart]=useState({});
  //Intially when the page loads it should get from local stoage
  useEffect(()=>{
const cart=window.localStorage.getItem('cart')
  },[])
  useEffect(()=>{
    window.localStorage.setItem('cart',JSON.stringify(cart))
  },[cart])
  return (
    <div className="App">
       <>
       <Router>
           <CartContext.Provider value={{cart,setCart}}>
              <Nav/>
          <Switch>
               <Route path="/" component={Homes} exact></Route>
             <Route path="/about" component={About} exact></Route>
                <Route path="/product" component={Product} exact></Route>
                  <Route path="/cart" component={Cart} exact></ Route>
                  <Route path="/singlepro/:_id" component={SinglePro } exact></Route>
         </Switch>
         </CartContext.Provider>
       </Router>
       </>
    </div>
  );
}

export default App;
