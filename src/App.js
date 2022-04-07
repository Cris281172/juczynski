import logo from './logo.svg';
import './App.css';
import RoutesWrapper from './route/RoutesWrapper'
import { BrowserRouter } from 'react-router-dom';
import {Helmet} from "react-helmet";
import shortCut from "./images/shortcut-icon.png";

function App() {
  return (
    <div className="App">
        <Helmet>
            <title>Portoflio - Krzysztof Juczyński</title>
            <meta name="description" content="Lorem ipsum dolor sit amet" />
            <link rel="shortcut icon" href={shortCut} />
        </Helmet>
        <BrowserRouter>
          <RoutesWrapper />
        </BrowserRouter>
    </div>
  );
}

export default App;
