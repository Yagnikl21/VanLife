import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import "./index.scss"
import { AuthContextProvider } from './Context/authContext';

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
