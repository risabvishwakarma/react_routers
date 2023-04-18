
import Home from "./component/home";
import About from "./component/about";
import Contact from "./component/contact";


import ShowId from "./component/showid";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import "./App.css";

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={ <Home />}>
      <Route path='user/:userId' element={ <ShowId/>}/>
      <Route path='About'element={ <About/>}/>
      <Route path='contact' element={ <Contact />}/>
      </Route>
      </Routes>
    </Router>
  );
}

export default App;
