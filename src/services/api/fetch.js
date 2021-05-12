export const fetchRequest = async (params) => {
    return await fetch(process.env.REACT_APP_API_URL + params.url, {
        method: params.method,
        body: params.body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
}