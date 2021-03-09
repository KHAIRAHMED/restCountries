import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './component/Home/Home';
import Friend from './component/Friend/Friend';


function App() {
  
  return (
   <div>
     <Router>
       <Switch>
         <Route path="/home">
           <Home/>
         </Route>
         <Route exact path="/" >
            <Home/>
         </Route>
         <Route path="/friends/:id">
              <Friend/>
         </Route>

         <Route path="*">
            <h2> 404 ..page is not available </h2>
         </Route>
       </Switch>
     </Router>
   </div>
  );
}

export default App;
