import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./views/home"
import { Register } from "./views/register"

import { Login } from './views/login'
import { ForgetPassword } from "./views/forgetPassword"
import { RepresentativeView } from "./views/representativeView"
import { CoordinatorView } from "./views/coordinatorView"

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
    },
    {
      path: "/representative",
      element: <RepresentativeView />
    },
    {
      path: "/coordinatorView",
      element: <CoordinatorView/>
    }
  ])

  return (
    <div className="w-screen h-screen">
      <RouterProvider router={router} />

    </div>
  )
}

export default App
