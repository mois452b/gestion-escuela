
export const getTeachers = async () => {
    return JSON.parse(localStorage.getItem('academicPeriods')) || []
}

export const uploadTeacher = async (teacher) => {
    if( !teacher ) return false
    const teachers = await getTeachers()
    if( teachers.find( s => s.CI === teacher.CI ) ) return false
    teachers.push(teacher)
    localStorage.setItem('teachers', JSON.stringify(teachers))
    return teachers
}

export const getTeacher = async ( CI ) => {
    const teachers = getTeachers()
    return teachers.find(teacher => teacher.CI === CI)
}