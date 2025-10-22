import './App.css';
import Test from "./components/functionalComponenet.jsx";
import Greet from './components/classComponent.js';
import Share from './components/propertyComp.js';
function App() {
  return (
    <div className="App">
       <Test/>
       <Greet/>
       <Share name="Anshul" age="24" country="India" />
    </div>
  );
}

export default App;
