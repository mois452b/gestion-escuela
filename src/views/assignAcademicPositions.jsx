export function AssignAcademicPositions() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Asignar Cargos Académicos</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="teacherName" className="block text-sm font-medium text-gray-700">
              Nombre del Docente
            </label>
            <input
              type="text"
              id="teacherName"
              name="teacherName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="positionTitle" className="block text-sm font-medium text-gray-700">
              Título del Cargo
            </label>
            <input
              type="text"
              id="positionTitle"
              name="positionTitle"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Fecha de Inicio
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              Fecha de Finalización
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Descripción
            </label>
            <textarea
              id="description"
              name="description"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Asignar Cargo
          </button>
        </form>
      </div>
    </div>
  );
}