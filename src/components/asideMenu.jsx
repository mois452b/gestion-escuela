import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faChalkboardTeacher, faTasks, faUserGraduate, faBook, faUsers, faUser } from '@fortawesome/free-solid-svg-icons';

export const AsideMenu = () => {
    return (
        <aside className="w-64 bg-gray-800 text-white h-full shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-bold mb-6 text-center">Menú del Coordinador</h2>
                <ul className="space-y-4">
                    <li>
                        <Link to="/open-academic-periods">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faCalendarAlt} className="mr-3" />
                                Aperturar Períodos Académicos
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/sections">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
                                Secciones
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/assign-academic-positions">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faTasks} className="mr-3" />
                                Asignar Cargos Académicos
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/upload-teacher">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faUser} className="mr-3" />
                                Ingresar Datos de Docentes
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/upload-subject">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faBook} className="mr-3" />
                                Ingresar Datos de Asignaturas
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/upload-representative">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faUsers} className="mr-3" />
                                Cargar Datos de Representantes
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/upload-student">
                            <button className="w-full text-left px-4 py-3 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 flex items-center rounded-md">
                                <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
                                Cargar Datos de Alumnos
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};
