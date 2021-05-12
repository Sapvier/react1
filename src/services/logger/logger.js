export const logger = (bool = false) => {
    localStorage.setItem('isAuth', " " + bool)
}

export const isAuth = () => {
    return localStorage.getItem('isAuth')
}