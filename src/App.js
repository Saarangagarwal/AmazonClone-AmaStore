import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Orders from './Orders';

const promise = loadStripe('pk_test_51IZ4hTFM3wQd183WJMNYs6uRWmcZQ6mjcm9PvEMsUdb7pncNJBBcG0wLnRDzC9i1vzMUsgwEEUWwhFTIS7kkgcxd00e1Oj1x9D')

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    //like a dynamic if statement
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if(authUser) {
        //user just logged in or the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])


  return (
    //BEM naming convention
    <Router>
      <div className="App">
  
        <Switch>

          <Route path="/login">
            <Login />
          </Route> 

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route> 

          <Route path="/orders">
            <Orders />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route> 

          <Route path="/">
            <Header />
            <Home />
          </Route> 
        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
