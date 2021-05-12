import React, {useState} from 'react';

export const AuthContext = React.createContext(false)

const AuthContextProvider = ({children}) => {
    const [isAuth, setIsAuth] = useState(false)

    const auth = () => {
        setIsAuth(prevState => !prevState)
    }

    return (
        <AuthContext.Provider value={{auth, isAuth}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider