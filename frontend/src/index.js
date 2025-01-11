import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter ,createBrowserRouter} from 'react-router-dom';
// import {  RouterProvider } from 'react-router-dom';
// import router from './router/router.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </React.StrictMode>
);
