import './App.css';
import Test from "./components/functionalComponenet.jsx";
import Greet from './components/classComponent.js';
import Share from './components/propertyComp.js';
import State from "./components/state.js";
function App() {
  return (
    <div className="App">
       <Test/>
       <Greet/>
       <Share name="Anshul" age="24" country="India" />
       <State/>
    </div>
  );
}

export default App;
