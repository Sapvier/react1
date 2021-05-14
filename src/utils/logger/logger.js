export const setIsAuth = (bool = false) => {
    localStorage.setItem('isAuth', "" + bool)
}

export const getIsAuth = () => {
    return localStorage.getItem('isAuth')
}