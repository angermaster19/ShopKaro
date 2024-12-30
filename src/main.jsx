import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Layout'
import { Home } from './Components/Home'
import { Shop } from './Components/Shop'
import { Dashboard } from './Components/Dashboard'
import { Contact } from './Components/Contact'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />}/>
      <Route path='/shop' element={<Shop />}/>
      <Route path='/dashboard' element={<Dashboard />}/>
      <Route path='/contact-us' element={<Contact />}/>

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
