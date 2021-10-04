import React from "react"
import {BrowserRouter as Router,  Link,} from "react-router-dom";

function App() {   
    return (
        <div className="navbar">     
            <Router>
                <Link to="/" >Home</Link>
            </Router>
        </div>
    )
}

export default App