import { useState } from 'react';

export function UploadStudent() {

    const [studentData, setStudentData] = useState({
    name: '',
    lastName: '',
    CI: '',
    gender: '',
    birthdate: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Student Data:', studentData);
  };

    return <>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cargar Datos de Alumnos</h1>
      <form onSubmit={handleSubmit}>
        
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={studentData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
            Apellido
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={studentData.lastName}
            onChange={handleInputChange}
            className="mt-1 block w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="id" className="block text-sm font-medium text-gray-700">
            Cedula de Identidad
          </label>
          <input
            type="text"
            id="CI"
            name="CI"
            value={studentData.CI}
            onChange={handleInputChange}
            className="mt-1 block w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Género
          </label>
          <select
            id="gender"
            name="gender"
            value={studentData.gender}
            onChange={handleInputChange}
            className="mt-1 block w-full"
          >
            <option value="">Selecciona una opción</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
            Fecha de Nacimiento
          </label>
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={studentData.birthdate}
            onChange={handleInputChange}
            className="mt-1 block w-full"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">
            Teléfono
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={studentData.address}
            onChange={handleInputChange}
            className="mt-1 block w-full"
          />
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