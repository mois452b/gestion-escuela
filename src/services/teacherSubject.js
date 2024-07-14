
export const getTeacherSubjects = async () => {
    return JSON.parse(localStorage.getItem('teacherSubjects')) || []
}

export const uploadTeacherSubject = async (teacherSubject) => {
    if( !teacherSubject || !teacherSubject.name || !teacherSubject.lastName || !teacherSubject.CI || !teacherSubject.phone || !teacherSubject.email ) return false
    const teacherSubjects = await getTeacherSubjects()
    if( teacherSubjects.find( s => s.CI === teacherSubject.CI ) ) return false
    teacherSubject.password = teacherSubject.CI
    teacherSubjects.push(teacherSubject)
    localStorage.setItem('teacherSubjects', JSON.stringify(teacherSubjects))
    return teacherSubjects
}

export const getTeacherSubject = async ( CI ) => {
    const teachers = getTeacherSubjects()
    return teachers.find(teacherSubject => teacherSubject.CI === CI)
}