
export const getSections = async () => {
    return JSON.parse(localStorage.getItem('sections')) || []
}

export const uploadSection = async (section) => {
    if( !section || !section.academicPeriod || !section.gradeLevel || !section.section || !section.maxStudents ) return false

    const sections = await getSections()
    if( sections.find( data => data.academicPeriod === section.academicPeriod && data.gradeLevel === section.gradeLevel && data.section === section.section ) ) return false
    section.id = sections.length + 1
    sections.push(section)
    localStorage.setItem('sections', JSON.stringify(sections))
    return section
}

export const getSection = async ( id ) => {
    const sections = getSections()
    return sections.find(section => section.id === id)
}