import { Link } from "react-router-dom"

export const AsideMenu = () => {
    return (
        <>
            <h2 className="text-lg font-bold mb-4 text-center">Menú</h2>
            <ul className="space-y-2">
                <li>
                    <Link>
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Aperturar Períodos Académicos
                        </button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Secciones
                        </button>
                    </Link>
                </li>
                <li>
                    <Link>
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Asignar Cargos Académicos
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/upload-teacher">
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Ingresar Datos de Docentes
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/upload-subject">
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Ingresar Datos de Asignaturas
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/upload-representative">
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Cargar Datos de Representantes
                        </button>
                    </Link>
                </li>
                <li>
                    <Link to="/upload-student">
                        <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
                        Cargar Datos de Alumnos
                        </button>
                    </Link>
                </li>
            </ul>
        </>
    )
}