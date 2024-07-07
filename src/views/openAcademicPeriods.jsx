import { useState } from "react";
import { uploadAcademicPeriods } from "../services/academicPeriods";

export function OpenAcademicPeriods() {

  const openAcademicPeriods = {
    id: '',
    startYear: '',
    endYear: '',
  }

  const [academicPeriods, setAcademicPeriods] = useState( openAcademicPeriods );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setAcademicPeriods((prevState) => ({
      ...prevState,
      [name]: +value,
    }));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let data = await uploadAcademicPeriods( academicPeriods )
    if( data ) {
      setAcademicPeriods( openAcademicPeriods )
      alert( 'Período acadademico abierto exitosamente' )
      return
    }
    alert( 'No se pudo abrir el período acadademico' )
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Apertura de Períodos Académicos</h1>
        <form onSubmit={handleSubmit} > 
          <div className="mb-4">
            <label htmlFor="startYear" className="block text-sm font-medium text-gray-700">
              Año de Inicio
            </label>
            <input
              type="number"
              id="startYear"
              name="startYear"
              value={academicPeriods.startYear}
              onChange={handleInputChange}
              min="1980"
              max="2100"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endYear" className="block text-sm font-medium text-gray-700">
              Año de Finalización
            </label>
            <input
              type="number"
              id="endYear"
              name="endYear"
              value={academicPeriods.endYear}
              onChange={handleInputChange}
              min="1980"
              max="2100"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Abrir Período
          </button>
        </form>
      </div>
    </div>
  );
}