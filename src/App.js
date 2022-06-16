import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import CatFacts from "./components/CatFacts";
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [catFacts, setCatFacts] = useState([]);

  useEffect(() => {
    axios.get("https://cat-fact.herokuapp.com/facts").then(res => setCatFacts(res.data)).catch(console.error)
  }, [])

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/catfacts">
            <CatFacts catFacts={catFacts} />
          </Route>
          <Route>
            <p>Page not found</p>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
