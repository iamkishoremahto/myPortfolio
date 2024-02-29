import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import Layout from './components/Layout'
import About from './components/About'
import Resume from './components/Resume'
import Work from './components/Work'
import Contact from './components/Contact'

  const router = createBrowserRouter([
    {
      path:"/",
      element: <Layout />,
      children: [
        {
          path:"",
          element: <About />
        },
        {
          path:"/resume",
          element: <Resume />
        },
        {
          path:"/work",
          element: <Work />
        },
        {
          path:"/contact",
          element: <Contact />
        }
      ]
    }
  ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
