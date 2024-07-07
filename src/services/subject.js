
export const getSubjects = async () => {
    return JSON.parse(localStorage.getItem('academicPeriods')) || []
}

export const uploadSubjects = async (subject) => {

    if( !subject ) return false
    const subjects = await getSubjects()
    if( subjects.find( s => s.name === subject.name ) ) return false
    subjects.push(subject)
    localStorage.setItem('subjects', JSON.stringify(subjects))
    return subjects

}

export const getSubject = async ( name ) => {
    const subjects = getSubjects()
    return subjects.find(subject => subject.name === name)
}