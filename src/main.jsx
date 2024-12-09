import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LandingPage from '../src/Layouts/LandingPage/index'
import Header from './Components/Custom/Header'
import Trip from './Layouts/Trip/Trip'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path:'/trip',
    element: <Trip />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <>
      <Header />
      <RouterProvider router={router} />
    </>
  </StrictMode>,
)
