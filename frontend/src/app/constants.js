export const endpoint = "http://localhost:5000"
// export const endpoint = process.env.DB_LINK || "https://transuentium-heroku.herokuapp.com"

export const HTTP_STATUS = Object.freeze({
    PENDING: 'PENDING',
    FULFILLED: 'FULFILLED',
    REJECTED: 'REJECTED',
})

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';
export const FETCH_ALL = 'FETCH_ALL';