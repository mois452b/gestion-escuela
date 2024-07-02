import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./views/home"
import { Register } from "./views/register"

import { Login } from './views/login'
import { ForgetPassword } from "./views/forgetPassword"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/forget-password",
      element: <ForgetPassword />
    }
  ])

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
