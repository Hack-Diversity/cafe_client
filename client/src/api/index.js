import https from 'https';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    hostname: process.env.REACT_APP_API_HOST || 'http://localhost:3000/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling
//
export const getAllItems = payload => api.get(`/books`, payload);
export const getItemById = id => api.get(`/book/${id}`);
export const insertItem = payload => api.post(`/book-create`, payload);
export const updateItemById = (id, payload) => api.patch(`/book-update/${id}`, payload);
export const updateItemByIdRent = (id, payload) => api.patch(`/book-rent/${id}`, payload);
export const deleteItemById = id => api.delete(`/book/${id}`);
// export const signIn = payload => api.post(`/admin-signin`, payload);
// export const passwordChange = (id, payload) => api.patch(`/admin-password/${id}`, payload);
// export const signOut = id => api.delete(`/admin-signout/${id}`,);
//
const apis = {
    getAllItems,
    getItemById,
    insertItem,
    updateItemById,
    deleteItemById,
    updateItemByIdRent
    // signIn,
    // signOut,
    // passwordChange
};
//
export default apis;
