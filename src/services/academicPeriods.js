
export const getAcademicPeriods = async () => {
    return JSON.parse(localStorage.getItem('academicPeriods')) || []
}

export const uploadAcademicPeriods = async (academicPeriod) => {
    if( !academicPeriod  || ( academicPeriod.endYear != academicPeriod.startYear + 1 )) return false 

    const academicPeriods = await getAcademicPeriods()
    if( academicPeriods.find( data => data.endYear === academicPeriod.endYear && data.startYear === academicPeriod.startYear ) ) return false
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