import './App.css';
import Home from './Components/Home/Home'
import Voting from './Components/Voting/Voting'
import Card from './Components/Card/Card'
import Estadisticas from './Components/Estadisticas/Estadisticas'
import Registered from './Components/Registered/Registered'
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
      
      <Route
        exact path='/Card'
        component={ () => <Card /> }
      />

      <Route
        exact path='/Registered'
        component={ () => <Registered /> }
      />

      <Route
        exact path='/Estadisticas'
        component={ () => <Estadisticas /> }
      />

    </div>
  </Router>
  );
}

export default App;
