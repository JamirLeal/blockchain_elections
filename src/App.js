import './App.css';
import Home from './Components/Home/Home'
import Voting from './Components/Voting/Voting'

import { Route, BrowserRouter as Router } from 'react-router-dom';

function App() {

  document.title = "Elecciones 2021";

  return (
    <Router
    basename={ process.env.PUBLIC_URL }
    >
    <div className="app-container">

      <Route
        exact path='/'
        component={ () => <Home /> }
      />

      <Route
        exact path='/Voting'
        component={ () => <Voting /> }
      />
      
    </div>
  </Router>
  );
}

export default App;
