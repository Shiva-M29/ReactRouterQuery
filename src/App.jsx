import React from 'react'
import Layout from './components/Layout'
import Users from './components/Users'
import Posts from './components/Posts'
import Albums from './components/Albums'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './components/Home'

const router = createBrowserRouter([
{
  path: '/',
  element: <Layout />,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:'users',
        element:<Users/>
      },
      {
        path:'posts',
        element:<Posts/>
      },
      {
        path:'albums',
        element:<Albums/>
      },
      {
        path:"home",
        element:<Home/>
      }
    ]
  }
  
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App