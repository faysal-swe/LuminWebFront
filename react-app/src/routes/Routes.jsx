import {
    createBrowserRouter,
  } from "react-router-dom";
  
  import Header from "../components/Header";
  import AboutUs from "../pages/AboutUs";
  import Home from "../pages/Home";
  import Products from "../pages/Products";
  
  
  export const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        // admin routes
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/about',
          element: <AboutUs/>
        },
        // Employee Routes
        {
          path: '/products',
          element: <Products />
        },
        /*{
          path: 'add-Employee',
          element: <AddNewEmployee />
        },
        {
          path: 'edit-employee',
          element: <EditSingleEmploy />
        },
        // Product Routes
        {
          path: 'allProducts',
          element: <AllProducts />
        },
        {
          path: 'addNewProduct',
          element: <AddProductForm />
        },
        {
          path: 'editProduct',
          element: <EditProduct />
        },
        // Suppliers Routes
        {
          path: 'allSuppliers',
          element: <Suppliers />
        },
        //User Management
        {
          path: 'userManagement',
          element: <UserManage />
        },*/
      ]
    }
  ]);