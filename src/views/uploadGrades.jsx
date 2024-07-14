import { useState } from 'react';
import { LogoutButton } from '../components/logoutButton';
export function UploadGrades() {
  const [gradeData, setGradeData] = useState({
    subject: '',
    student: '',
    grade: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setGradeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío de datos
    console.log('Grade Data:', gradeData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <LogoutButton />
    <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Cargar Notas de Asignaturas</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Asignatura</label>
          <select
            id="subject"
            name="subject"
            value={gradeData.subject}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecciona una asignatura</option>
            {/* Asegúrate de reemplazar estos valores con las asignaturas reales */}
            <option value="math">Matemáticas</option>
            <option value="science">Ciencias</option>
            <option value="history">Historia</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="student" className="block text-sm font-medium text-gray-700">Estudiante</label>
          <select
            id="student"
            name="student"
            value={gradeData.student}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Selecciona un estudiante</option>
            {/* Asegúrate de reemplazar estos valores con los estudiantes reales */}
            <option value="student1">Juan Pérez</option>
            <option value="student2">María García</option>
            <option value="student3">Luis Martínez</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Nota</label>
          <input
            type="number"
            id="grade"
            name="grade"
            value={gradeData.grade}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
        >
          Subir Notas
        </button>
      </form>
    </div>
  </div>
  );
}