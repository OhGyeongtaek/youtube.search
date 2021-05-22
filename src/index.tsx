import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { VideoStore } from './modules/videoStore'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={VideoStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
