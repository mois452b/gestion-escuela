
export const getTeachers = async () => {
    return JSON.parse(localStorage.getItem('teachers')) || []
}

export const uploadTeacher = async (teacher) => {
    if( !teacher ) return false
    const teachers = await getTeachers()
    if( teachers.find( s => s.CI === teacher.CI ) ) return false
    teacher.password = teacher.CI
    teachers.push(teacher)
    localStorage.setItem('teachers', JSON.stringify(teachers))
    return teachers
}

export const getTeacher = async ( CI ) => {
    const teachers = getTeachers()
    return teachers.find(teacher => teacher.CI === CI)
}