import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import '../show/assets/css/index.css';
import Store from '../process/app/Store';
import App from '../show/pages/public/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>
);
