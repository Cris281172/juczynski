import logo from './logo.svg';
import './App.css';
import RoutesWrapper from './route/RoutesWrapper'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <RoutesWrapper />
        </BrowserRouter>
    </div>
  );
}

export default App;
