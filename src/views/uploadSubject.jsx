import { useEffect, useState } from 'react';
import { uploadSubject } from '../services/subject';
import { getTeachers } from '../services/teachers';


export function UploadSubject() {
    const defaultSubjectData = {
      name: '',
      code: '',
      teacherId: '',
    }

    const [subjectData, setSubjectData] = useState(defaultSubjectData);
    const [teachers, setTeachers] = useState([]);
  
    console.log(teachers)
    useEffect( () => {
      ( async () => {
        const datas = await getTeachers( )
        setTeachers( datas )
      })()
    }, [])

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setSubjectData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      let data =  await uploadSubject( subjectData )
      console.log(data)
      if( data ) {
        setSubjectData( defaultSubjectData )
        alert( 'Asignatura registrada exitosamente' )
        return
      }
      alert( 'No se pudo registrar la asignatura' )

    };
  
    return <>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Cargar Datos de Asignaturas</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre de la Asignatura
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={subjectData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
    
          <div className="mb-4">
            <label htmlFor="code" className="block text-sm font-medium text-gray-700">
              Código de la Asignatura
            </label>
            <input
              type="text"
              id="code"
              name="code"
              value={subjectData.code}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="teacher" className="block text-sm font-medium text-gray-700">
              Profesor
            </label>
            <select
              id="teacherId"
              name="teacherId"
              value={subjectData.teacherId}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Seleccione un profesor</option>
              {teachers.map((teacher) => (
                <option key={teacher.CI} value={teacher.CI}>
                  {teacher.firstName} {teacher.lastName}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Subir Datos
          </button>
        </form>
      </div>
    </div>
      </>
  }