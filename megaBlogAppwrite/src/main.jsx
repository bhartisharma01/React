import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // children: [
    //   {
    //     path: "/",
    //     element: <Home />,
    //   },
    // ]
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
