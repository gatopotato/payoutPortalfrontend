import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Advisory,Layout,Payout,User,Vehicle} from "./components/index.js";
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element={<Advisory />} />
      <Route path='advisory' element={<Advisory />} />
      <Route path='vehicle' element={<Vehicle />} />
      <Route path='user' element={<User />} />
      <Route path='payout' element={<Payout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
