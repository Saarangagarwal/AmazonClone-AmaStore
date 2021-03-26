import './App.css';
import Header from './Header'
import Home from './Home'
import Checkout from './Checkout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from "./firebase";
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

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
