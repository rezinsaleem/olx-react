import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { FirebaseContext } from './store/Context';
import {Firebase} from './firebase/config';
import Context from './store/Context';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 

root.render(
  <React.StrictMode>
  <FirebaseContext.Provider value={{ Firebase }}>
    <Context>
      <App />
    </Context>
  </FirebaseContext.Provider>
</React.StrictMode>
);
