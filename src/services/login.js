
/**
 * intenta realisar la autenticacion de un usuario admin. 
 * retorna falso si no se autenticó 
 * retorna los datos de usuario en formato json en caso de exito
 */
export const authAdmin = ( username, password ) => {
    if ( !username || !password ) {
        return false;
    }

    if ( username === 'admin' && password === 'admin' ) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userType', 'admin');
        localStorage.setItem('user', JSON.stringify(datas))
        return {
            name: 'admin',
            type: 'admin'
        }
    }
    
    return false
}

export const logout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.setItem('userType', '');
    localStorage.setItem('user', ''); 
}

export const userIsLoggedIn = () => {
    return !!localStorage.getItem('isLoggedIn');
}

export const userType = () => {
    return localStorage.getItem('userType') || ""
}