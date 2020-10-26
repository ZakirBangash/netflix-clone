import './App.css';
import {Row} from './Row';
import requests from './request'

function App() {
  return (
    <div className="App">
     <h1>Welcome to netflix clonehtt</h1>
     <Row title="NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals}/>
     <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
