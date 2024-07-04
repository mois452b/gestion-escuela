import { useState } from 'react';

export function UploadSubject() {
    const [subjectData, setSubjectData] = useState({
      name: '',
      code: '',
      description: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setSubjectData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Aquí puedes agregar la lógica para manejar el envío de datos
      console.log('Subject Data:', subjectData);
    };
  
    return <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cargar Datos de Asignaturas</h1>
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
              className="mt-1 block w-full"
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
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              value={subjectData.description}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            ></textarea>
          </div>
  
          <button
            type="submit"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Subir Datos
          </button>
        </form>
      </div>
      </>
  }