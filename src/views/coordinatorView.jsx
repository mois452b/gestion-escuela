
export function CoordinatorView() {
  return (
    <div className="flex h-screen">
      <aside className="w-1/4 bg-gray-200 p-4">
        <h2 className="text-lg font-bold mb-4 text-center">Menú</h2>
        <ul className="space-y-2">
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Aperturar Períodos Académicos
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Secciones
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Asignar Cargos Académicos
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Ingresar Datos de Docentes
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Ingresar Datos de Asignaturas
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Cargar Datos de Representantes
            </button>
          </li>
          <li>
            <button className="w-full text-left px-4 py-2 bg-blue-500 text-white rounded-md">
              Cargar Datos de Alumnos
            </button>
          </li>
        </ul>
      </aside>
      <main className="w-3/4 bg-white p-8">
        <h1 className="text-2xl font-bold mb-4">Bienvenido, Coordinador</h1>
      </main>
    </div>
  );
}
