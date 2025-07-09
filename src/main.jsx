import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App';
import VenuePage from './pages/VenuePage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/venues/:id', element: <VenuePage /> },
  { path: '*', element: <NotFound /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
