import './App.css';
import CountrySelector from './components/CountrySelector';
import Header from "./components/Header";
import Stats from "./components/Stats"

function App() { 
  return (
    <div className="App">
    <Header/>
    <h1>Global summary</h1>  
     <Stats url="https://covid19.mathdro.id/api"/>
     {/* <select name="" id="countries" className="ml-3 shadow">
     <option value="" >Select a country</option>
     </select> */}
     <CountrySelector/>
     {/* <Stats url="https://covid19.mathdro.id/api"/> */}
    
    </div>
  );
}

export default App;
