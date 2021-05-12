const inputValidator = (e) => {

    if (e.target.value.trim().length === 0) {
        e.target.previousElementSibling.innerText = 'Field is empty'
        e.target.previousElementSibling.style.color = 'crimson'
        e.target.style.border = "1px solid crimson"
    }
    else {
        e.target.previousElementSibling.removeAttribute('style')
        e.target.previousElementSibling.innerText = `${e.target.placeholder}`
        e.target.removeAttribute('style')
    }
}


export const nameChangeHandler = (e, user) => {
    inputValidator(e)

    return ({
        ...user,
        name: e.target.value
    })
}
export const emailChangeHandler = (e, user) => {
    inputValidator(e)

    return ({
        ...user,
        email: e.target.value
    })
}
export const cityChangeHandler = (e,user) => {
    inputValidator(e)

    return ({
        ...user,
        address: {
            ...user.address,
            city: e.target.value}
    })
}
export const companyChangeHandler = (e, user) => {
    inputValidator(e)

    return ({
        ...user,
        company: {
            ...user.company,
            name: e.target.value}})
}