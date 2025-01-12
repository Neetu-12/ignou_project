import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserDataContext } from './context/UserDataContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserDataContext>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </UserDataContext>
  </React.StrictMode>
);
