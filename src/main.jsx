import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import './index.css';
import App from './App';
import Store from './app/Store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center " reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
