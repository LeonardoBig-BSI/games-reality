import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './css/keyframes.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Router.tsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
// import { UserContextProvider } from './contexts/UserContext.tsx'
import { ToastContainer } from 'react-toastify'
import { persistor, store } from './redux/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastContainer />
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
