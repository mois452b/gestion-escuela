export function OpenSections() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Apertura de Secciones</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="sectionName" className="block text-sm font-medium text-gray-700">
              Nombre de la Sección
            </label>
            <input
              type="text"
              id="sectionName"
              name="sectionName"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gradeLevel" className="block text-sm font-medium text-gray-700">
              Nivel de Grado
            </label>
            <input
              type="text"
              id="gradeLevel"
              name="gradeLevel"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="teacherInCharge" className="block text-sm font-medium text-gray-700">
              Docente a Cargo
            </label>
            <input
              type="text"
              id="teacherInCharge"
              name="teacherInCharge"
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
            Abrir Sección
          </button>
        </form>
      </div>
    </div>
  );
}