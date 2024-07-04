import { useState } from 'react';


export function UploadTeacher() {
    const [teacherData, setTeacherData] = useState({
      firstName: '',
      lastName: '',
      CI: '',
      birthDate: '',
      phone: '',
      address: '',
      position: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setTeacherData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Teacher Data:', teacherData);
    };
  
    return <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cargar Datos de Docentes</h1>
        <form onSubmit={handleSubmit}>

          <div className="mb-4">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={teacherData.firstName}
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
              value={teacherData.lastName}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="CI" className="block text-sm font-medium text-gray-700">
              Cédula
            </label>
            <input
              type="text"
              id="CI"
              name="CI"
              value={teacherData.CI}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              value={teacherData.birthDate}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={teacherData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Dirección
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={teacherData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="position" className="block text-sm font-medium text-gray-700">
              Cargo
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={teacherData.position}
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