import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { StateProvider } from './Hooks/StateProvider';
import reducer, { initialState } from './Hooks/StateProvider/reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
