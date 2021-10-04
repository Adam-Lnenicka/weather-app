import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import {Switch, Route, BrowserRouter as Router} from "react-router-dom"

function App() {

  return (
    <div>
        <Navbar/>
        <Router>  
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </Router>
    </div>
  );
}

export default App;
