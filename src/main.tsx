import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/keyframes.css'
import Router from './routes/Router.tsx'
import { UserContextProvider } from './contexts/UserContext.tsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserContextProvider>
      <ToastContainer />
      <Router />
    </UserContextProvider>
  </StrictMode>,
)
