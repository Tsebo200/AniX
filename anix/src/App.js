import Navigation from "./components/Navigation";
import MainInfo from "./components/MainInfo";
import {Routes, Route} from 'react-router-dom';
import Comp from "./components/Comp";
import Time from "./components/Time";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={ <MainInfo />}/>
        <Route path="/compare" element={<Comp/>}/>
        <Route path="/timeline" element={<Time/>}/>
      </Routes>
    </div>
  );
}

export default App;
