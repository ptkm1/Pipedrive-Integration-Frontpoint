import axios from 'axios';

const api = axios.create({
  baseURL: 'https://metodoteatralleonardocalixto.pipedrive.com/api/v1',
});

export default api;
