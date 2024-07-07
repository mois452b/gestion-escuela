import { getTeachers } from "./teachers";

/**
 * intenta realisar la autenticacion de un usuario admin o teacher. 
 * retorna falso si no se autenticó 
 * retorna los datos de usuario en formato json en caso de exito
 */
export const auth = ( username, password ) => {
    if ( !username || !password ) {
        return false;
    }

    if ( username === 'admin' && password === 'admin' ) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userType', 'admin');
        localStorage.setItem('user', JSON.stringify({ name: 'admin', type: 'admin' }));
        return {
            name: 'admin',
            type: 'admin'
        }
    }

    const teacher = getTeachers().find( teacher => teacher.firstName === username && teacher.password === password )
    if( teacher ) {
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('userType', 'teacher');
        localStorage.setItem('user', JSON.stringify(teacher));
        teacher.type = 'teacher'
        return teacher
    }
    
    return false
}

export const logout = () => {
    localStorage.setItem('isLoggedIn', false);
    localStorage.setItem('userType', '');
    localStorage.setItem('user', ''); 
}

export const userIsLoggedIn = () => {
    return !!JSON.parse(localStorage.getItem('isLoggedIn'));
}

export const userType = () => {
    return localStorage.getItem('userType') || ""
}
