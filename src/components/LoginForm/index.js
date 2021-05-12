export const loginChangeHandler = (e) => {
    e.target.parentElement.lastElementChild.previousElementSibling.innerHTML = ''
    return e.target.value
}

export const passwordChangeHandler = (e) => {
    e.target.parentElement.lastElementChild.previousElementSibling.innerHTML = ''
    return e.target.value
}