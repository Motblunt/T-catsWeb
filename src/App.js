import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Banner from "./components/Banner/Banner"


function App() {
  return (
    <div className="App">
      <Banner/>
      <Navbar/>
    </div>
  );
}

export default App;
