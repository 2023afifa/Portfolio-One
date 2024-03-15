import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Pages/Root/Root.jsx';
import Home from './Pages/HomePage/Home/Home.jsx';
import Project1 from './Pages/HomePage/ProjectDetails/Project1/Project1.jsx';
import ErrorPage from './Pages/HomePage/ErrorPage/ErrorPage.jsx';
import Project2 from './Pages/HomePage/ProjectDetails/Project2/Project2.jsx';
import Project3 from './Pages/HomePage/ProjectDetails/Project3/Project3.jsx';
import Project4 from './Pages/HomePage/ProjectDetails/Project4/Project4.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/project1",
        element: <Project1></Project1>,
      },
      {
        path: "/project2",
        element: <Project2></Project2>,
      },
      {
        path: "/project3",
        element: <Project3></Project3>,
      },
      {
        path: "/project4",
        element: <Project4></Project4>,
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='font-robotoMono'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
