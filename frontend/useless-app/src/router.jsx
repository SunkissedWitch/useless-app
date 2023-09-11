import React from 'react'
import {
  createBrowserRouter
} from 'react-router-dom'

import Root from './routes/root'

import Products from './routes/products'
import WatchPage from './routes/watch'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Products /> },
      {
        path: 'watch',
        element: <WatchPage />
      }
    ]
  },
]);

export default router;
