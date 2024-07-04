import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AsideMenu } from "../components/asideMenu"
import { userIsLoggedIn, userType } from "../services/login";

export const AppLayout = ({ children }) => {

    const { pathname } = useLocation()

    const isLoggedIn = userIsLoggedIn()
    const isAdmin = userType() === 'admin'

    if( !isLoggedIn && pathname !== "/login" && pathname !== "/register" ) {
        console.log("entro")
        return <Navigate to="/login" />
    }

    if(!isLoggedIn) {
        return children
    }

    return (
        <div className="flex h-screen">
            {isLoggedIn && isAdmin && <aside className="w-1/4 bg-gray-200 p-4">
                <AsideMenu />
            </aside>}
            <main className="w-3/4 bg-white p-8">
                {children}
            </main>
        </div>
    )
}