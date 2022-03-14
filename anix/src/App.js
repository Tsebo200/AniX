import Navigation from "./Components/Navigation";
import Stats from "./Components/Stats";
import {Routes, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/index" element={ <Stats />}/>
      </Routes>
    </div>
  );
}

export default App;
