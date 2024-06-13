import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './Navbar.jsx'
const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

export default Layout