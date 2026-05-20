import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import {Toaster} from 'react-hot-toast'

import './index.css'
import App from './pages/HomePage.tsx'
import ProtectedRoute from './utils/ProtectedRoute.tsx'


import LoginPage from './pages/LoginPage.tsx'
import PageNotFound from './pages/PageNotFound.tsx'
import SignUpPage from './pages/SignUpPage.tsx'
import PurchasePlan from './pages/PurchasePlan.tsx'
import {RateLimitProvider} from './components/RateLimitProvider.js'


const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/home",
    element: (
        <ProtectedRoute>
          <App/>
        </ProtectedRoute>
      )
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"*",
    element:<PageNotFound/>
  },
  {
    path:"/signup",
    element:<SignUpPage/>
  },
  {
    path:"/pricing",
    element:<PurchasePlan/>
  }
])

//WARNING: Change later


const CLINET_ID = import.meta.env.VITE_CLINET_ID 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    <GoogleOAuthProvider clientId={CLINET_ID!}>
      <RateLimitProvider>
        <RouterProvider router={router}/>
      </RateLimitProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
