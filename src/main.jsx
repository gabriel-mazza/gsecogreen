import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Sobre from './pages/Sobre.jsx';
import PageNotFound from './pages/PageNotFound.jsx'
import Relatorios from './pages/Relatorios.jsx';
import Eletronicos from './pages/Eletronicos.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/sobre', element: <Sobre /> },
      { path: '/relatorios', element: <Relatorios /> },
      { path: '/eletronicos', element: <Eletronicos /> },
      { path: '*', element: <PageNotFound /> } 
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} /> 
  </StrictMode>
);
