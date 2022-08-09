import './assets/css/App.css';
import Card from './components/Card';

import Navbar from './components/Navbar';
import WeatherPanel from './components/WeatherPanel';

function App() {
  return (
    <div className='App'>
      <Navbar/>  
      <WeatherPanel/>
    </div>
  );
}

export default App;
