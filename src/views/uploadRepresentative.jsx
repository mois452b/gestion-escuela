import { useState } from 'react';

export function UploadRepresentative() {
    const [representativeData, setRepresentativeData] = useState({
      name: '',
      lastname: '',
      CI: '',
      birthdate: '',
      phone: '',
      email: '',
      address: '',
    });
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setRepresentativeData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Representative Data:', representativeData);
    };
  
    return <>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cargar Datos de Representante</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={representativeData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={representativeData.lastname}
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
              value={representativeData.CI}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              id="birthdate"
              name="birthdate"
              value={representativeData.birthdate}
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
              value={representativeData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={representativeData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full"
            />
          </div>
  
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Dirección
            </label>
            <textarea
              id="address"
              name="address"
              value={representativeData.address}
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