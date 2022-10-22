import { baseApi } from '@/plugins/axios';

const api = '/api/todo';

const list = () => baseApi.get(`${api}`);
const add = (body) => baseApi.post(`${api}`, body);
const del = (id) => baseApi.delete(`${api}/${id}`);
const edit = () => baseApi.get(`${api}`);

export { list, add, del, edit };