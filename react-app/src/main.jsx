import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Footer from './components/Footer.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from './routes/Routes.jsx'
import { BrowserRouter, RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
    <RouterProvider router={router}/>
    <Footer/>
  </React.StrictMode>,
)
