export const baseResponse = (code, mesaage = '', data = '') => ({
    code: code,
    message: mesaage,
    results: data,
})

export const dbResult = (data) => ({
    results: data
})