import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import App from './Components/App';
import { CanvasProvider } from './Components/CanvasFunctions';

ReactDOM.render(
  <React.StrictMode>
    <CanvasProvider> {/*wrapping the react hooks around app */}
      <App />
    </CanvasProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
