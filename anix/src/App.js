import Navigation from "./components/Navigation";
import Stats from "./components/Stats";
import MainInfo from "./components/MainInfo";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation />
      < MainInfo />
      <Routes>
        <Route path="/index" element={ <Stats />}/>
      </Routes>
    </div>
  );
}

export default App;
