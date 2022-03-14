import Navigation from "./Components/Navigation";
import Stats from "./Components/Stats";
import MainInfo from "./Components/MainInfo";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation />
      <MainInfo />
      <Routes>
        <Route path="/index" element={ <Stats />}/>
      </Routes>
    </div>
  );
}

export default App;
