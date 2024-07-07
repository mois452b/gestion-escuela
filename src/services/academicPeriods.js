
export const getAcademicPeriods = async () => {
    return JSON.parse(localStorage.getItem('academicPeriods')) || []
}

export const uploadAcademicPeriods = async (academicPeriod) => {
    if( !academicPeriod  || (academicPeriod.startYear > academicPeriod.endYear)) return false // acomodar 

    const academicPeriods = await getAcademicPeriods()
    academicPeriod.id = academicPeriods.length + 1
    if( academicPeriods.find( s => s.id === academicPeriod.id ) ) return false
    academicPeriods.push(academicPeriod)
    localStorage.setItem('academicPeriods', JSON.stringify(academicPeriods))
    return academicPeriod
}

export const getAcademicPeriod = async ( id ) => {
    const academicPeriods = getAcademicPeriods()
    return academicPeriods.find(academicPeriod => academicPeriod.id === id)
}