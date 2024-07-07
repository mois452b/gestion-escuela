
export const getAcademicPeriods = async () => {
    return JSON.parse(localStorage.getItem('academicPeriods')) || []
}

export const uploadAcademicPeriods = async (academicPeriod) => {
    console.log(academicPeriod)
    if( !academicPeriod  && (academicPeriod.starYear > academicPeriod.endYear)) return false // acomodar 

    const academicPeriods = await getAcademicPeriods()
    academicPeriod.id = academicPeriods.length + 1
    if( academicPeriods.find( s => s.id === academicPeriod.id ) ) return false
    academicPeriods.push(academicPeriod)
    localStorage.setItem('academicPeriods', JSON.stringify(academicPeriods))
    return academicPeriods
}

export const getAcademicPeriod = async ( id ) => {
    const academicPeriods = getAcademicPeriods()
    return academicPeriods.find(academicPeriod => academicPeriod.id === id)
}