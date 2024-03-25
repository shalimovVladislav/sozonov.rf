import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Feedback from '@/pages/Feedback';
import Products from '@/pages/Products';

const app = () => {
  const root = createRoot(document.getElementById('root'));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: '/home',
            element: <Home />
        },
      ],
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/feedback',
      element: <Feedback />
    },
    {
      path: '/products',
      element: <Products />
    },
]);

  root.render(
    <React.StrictMode>
        <RouterProvider router={router}>
        </RouterProvider>
    </React.StrictMode>
  );
};

app();