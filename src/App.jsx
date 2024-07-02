import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./views/home"
import { Register } from "./views/register"

import { Login } from './components/login'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
