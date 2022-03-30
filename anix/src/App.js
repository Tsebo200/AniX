import Navigation from "./components/Navigation";
import Stats from "./components/Stats";
import MainInfo from "./components/MainInfo";
import {Routes, Route} from 'react-router-dom';
import Comp from "./components/Comp";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <> <Stats /> <MainInfo /> </>}/>
        <Route path="/compare" element={<Comp/>}/>
      </Routes>
    </div>
  );
}

export default App;
