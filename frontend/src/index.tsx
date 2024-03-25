import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './components/App';
import Home from '@/pages/Home';
import { LazyAbout } from '@/pages/About.lazy';
import Feedback from '@/pages/Feedback';
import { LazyProducts } from '@/pages/Products.lazy';

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
      element: <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
    },
    {
      path: '/feedback',
      element: <Feedback />
    },
    {
      path: '/products',
      element: <Suspense fallback={'Loading...'}><LazyProducts /></Suspense>
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