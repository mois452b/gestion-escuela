
export const getRepresentatives = async () => {
    return JSON.parse(localStorage.getItem('Representatives')) || []
}

export const uploadRepresentatives = async (Representative) => {
    if( !Representative ) return false
    const representatives = await getRepresentatives()
    if( representatives.find( s => s.CI === Representative.CI ) ) return false
    representatives.push(Representative)
    localStorage.setItem('Representatives', JSON.stringify(representatives))
    return representatives
}

export const getRepresentative = async ( CI ) => {
    const representatives = getRepresentatives()
    return representatives.find(representative => representative.CI === CI)
}