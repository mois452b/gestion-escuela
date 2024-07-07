import { useState, useEffect } from 'react';
import { getAcademicPeriods } from '../services/academicPeriods';

export function OpenSections() {
  const [sectionsData, setSectionsData] = useState({
    academicPeriod: '',
    gradeLevel: '',
    section: '',
    maxStudents: ''
  });

  const [academicPeriods, setAcademicPeriods] = useState([]);

  useEffect(() => {
    async function fetchAcademicPeriods() {
      const periods = await getAcademicPeriods();
      setAcademicPeriods(periods);
    }
    fetchAcademicPeriods();
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSectionsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSectionChange = (event) => {
    const { name, value } = event.target;
    if (/^[a-zA-Z]*$/.test(value)) {
      setSectionsData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(sectionsData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Apertura de Secciones</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="academicPeriod" className="block text-sm font-medium text-gray-700">
              Período Académico
            </label>
            <select
              id="academicPeriod"
              name="academicPeriod"
              value={sectionsData.academicPeriod}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Seleccione un período académico</option>
              {academicPeriods.map((period) => (
                <option key={period.id} value={period.id}>
                  {period.startYear} - {period.endYear}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700">
              Nivel de Grado
            </label>
            <select
              id="gradeLevel"
              name="gradeLevel"
              value={sectionsData.gradeLevel}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="" disabled>Seleccione un nivel de grado</option>
              {[1, 2, 3, 4, 5].map(level => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="section" className="block text-sm font-medium text-gray-700">
              Sección 
            </label>
            <input
              type="text"
              id="section"
              name="section"
              value={sectionsData.section}
              onChange={handleSectionChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="maxStudents" className="block text-sm font-medium text-gray-700">
              Máximo de Estudiantes
            </label>
            <input
              type="number"
              id="maxStudents"
              name="maxStudents"
              value={sectionsData.maxStudents}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Abrir Sección
          </button>
        </form>
      </div>
    </div>
  );
}
