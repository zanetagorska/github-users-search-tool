import React from 'react'
import ReactDOM from 'react-dom/client'
import SearchPage from './SearchPage'
import UserPage from './UserPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SearchPage />
  },
  {
    path: '/user/:id',
    element: <UserPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
