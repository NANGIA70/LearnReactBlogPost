
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>  
            <Route path="/create">
              <Create />
            </Route>
            {/* <Route path="/create" exact component={Home} /> */}
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
