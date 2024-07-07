export const getStudents = async () => {
    return JSON.parse(localStorage.getItem('students')) || []
}

/**
 * 
 * @returns false si no se pudo guardar el estudiante,
 * de lo contrario retorna el estudiante
 */
export const uploadStudent = async (student) => {
    if( !student || !student.name || !student.lastName || !student.CI || !student.birthdate || !student.address || !student.gender ) return false
    const students = await getStudents()
    console.log(students)
    if( students.find( s => s.CI === student.CI ) ) return false
    students.push(student)
    localStorage.setItem('students', JSON.stringify(students))
    return student
}


export const getStudent = async ( CI ) => {
    const students = getStudents()
    return students.find(student => student.CI === CI)
}