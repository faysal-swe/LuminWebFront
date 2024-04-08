import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx';
import Product from './components/Product/Product.jsx'
import Contact from './components/Contact/Contact.jsx'
import Banner from './components/Banner/Banner.jsx'
import Services from './components/Services/Services.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"/",
        element: <Banner/>
      },
      {
        path:"services",
        element: <Services/>
      },
      {
        path:"about",
        element: <About/>
      },
      {
        path:"products",
        element: <Product/>
      },
      {
        path:"contact",
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
