import https from 'https';
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    hostname: process.env.REEACT_APP_API_HOST || 'http://localhost:3000/',
    httpsAgent: https.Agent({
        rejectUnauthorized: false,
    }),
});

// TODO - use interceptors for better error handling: https://masteringjs.io/tutorials/axios/interceptors#error-handling

export const getAllItems = payload => api.get(`/books`, payload);
export const getItemById = id => api.get(`/book/${id}`);
export const insertItem = payload => api.post(`/book`, payload);
export const updateItemById = (id, payload) => api.put(`/book/${id}`, payload);
export const deleteItemById = id => api.delete(`/book/${id}`);

const apis = {
    getAllItems,
    getItemById,
    insertItem,
    updateItemById,
    deleteItemById,
};

export default apis;
