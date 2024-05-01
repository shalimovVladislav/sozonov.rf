import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import init from '@/init';

const app = () => {
  const root = createRoot(document.getElementById('root'));
  const vdom = init();
  root.render(<React.StrictMode>{vdom}</React.StrictMode>);
};

app();