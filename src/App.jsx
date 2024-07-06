import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Home } from "./views/home"
import { Register } from "./views/register"

import { Login } from './views/login'
import { ForgetPassword } from "./views/forgetPassword"
import { RepresentativeView } from "./views/representativeView"
import { CoordinatorView } from "./views/coordinatorView"
import { AppLayout } from "./layout/appLayout"
import { UploadStudent } from "./views/uploadStudent"
import { UploadTeacher } from "./views/uploadTeacher"
import {UploadSubject} from "./views/uploadSubject"
import {UploadRepresentative} from "./views/uploadRepresentative"
import { OpenAcademicPeriods } from "./views/openAcademicPeriods"
import { OpenSections } from "./views/openSections"
import { AssignAcademicPositions } from "./views/assignAcademicPositions"
import { LoginStudents } from "./views/loginStudents"
import { UploadGrades } from "./views/uploadGrades"

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: (<AppLayout>
                  <Home />
                </AppLayout>),
    },
    {
      path: "/register",
      element: (<AppLayout>
                  <Register />
                </AppLayout>),
    },
    {
      path: "/login",
      element: (<AppLayout>
                  <Login />
                </AppLayout>),
    },
    {
      path: "/forget-password",
      element: (<AppLayout>
                <ForgetPassword />
              </AppLayout>)
    },
    {
      path: "/representative/:CI",
      element: (<AppLayout>
                  <RepresentativeView />
                </AppLayout>)
    },
    {
      path: "/coordinator",
      element: (<AppLayout>
                  <CoordinatorView />
                </AppLayout>)
    },
    {
      path: "/upload-student",
      element: (<AppLayout>
                  <UploadStudent />
                </AppLayout>)
    },
    {
      path: "/upload-teacher",
      element: (<AppLayout>
                  <UploadTeacher />
                </AppLayout>)
    },
    {
      path: "/upload-subject",
      element: (<AppLayout>
                  <UploadSubject />
                </AppLayout>)
    },
    {
      path: "/upload-representative",
      element: (<AppLayout>
                  <UploadRepresentative />
                </AppLayout>)
    },
    {
      path: "/open-academic-periods",
      element: (<AppLayout>
                  <OpenAcademicPeriods/>
                </AppLayout>),
    },
    {
      path: "/open-session",
      element: (<AppLayout>
                  <OpenSections/>
                </AppLayout>),
    },
    {
      path: "/assign-academic-positions",
      element: (<AppLayout>
                  <AssignAcademicPositions />
                </AppLayout>),
    },
    {
      path: "/login-students",
      element: (<AppLayout>
                  <LoginStudents />
                </AppLayout>),
    },
    {
      path: "/upload-grades",
      element: (<AppLayout>
                  <UploadGrades />
                </AppLayout>),
    }
  ])

  return (
    <div className="w-screen h-screen">
        <RouterProvider router={router} />
    </div>
  )
}

export default App
