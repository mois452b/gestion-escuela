
export const getSubjects = async () => {
    return JSON.parse(localStorage.getItem('subjects')) || []
}

export const uploadSubject = async (subject) => {
    console.log(subject)
    if( !subject || !subject.name || !subject.code || !subject.teacherID ) return false
    const subjects = await getSubjects()
    if( subjects.find( s => s.code === subject.code || s.name === subject.name ) ) return false
    if( subjects.find( s => s.name === subject.name ) ) return false
    subjects.push(subject)
    localStorage.setItem('subjects', JSON.stringify(subjects))
    return subjects

}

export const getSubject = async ( name ) => {
    const subjects = await getSubjects()
    return subjects.find(subject => subject.name === name)
}