import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from 'react-redux';

import App from '@/components/App';
import Home from '@/pages/Home';
import { LazyAbout } from '@/pages/About.lazy';
import Feedback from '@/pages/Feedback';
import { LazyProducts } from '@/pages/Products.lazy';
import Auth from '@/pages/Auth';

import store from '@/slices/index';



export default () => {

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
    {
      path: '/auth',
      element: <Auth />
    },
]);
    

  const vdom = (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );

  return vdom;
};
