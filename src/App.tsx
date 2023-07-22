import React from 'react';
import './App.scss';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Layout} from "./layouts/layout/layout";
import {Home} from "./pages/home/Home";
import {NotFound} from "./pages/not-found/NotFound";

const router= createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App;
