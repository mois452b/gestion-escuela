import {logout } from "../services/login";
import { useNavigate } from "react-router-dom";
export const LogoutButton = () => {

    const navigate = useNavigate();
    const onSubmit = (event) => {
        event.preventDefault();
    
        logout()
        navigate('/login')

    }

    return <>
        <div className="flex justify-end p-4">
      <button
        onClick={onSubmit}
        className="bg-red-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-150 ease-in-out"
      >
        Cerrar Sesión
      </button>
    </div>

    </>
}