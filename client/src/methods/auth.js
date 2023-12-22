import axios from 'axios';

export const userFetch = {
  reg: async (data) => {
    try {
      let config = {
        url: 'http://localhost:5000/api/auth/register',
        method: 'POST',
        data,
      };
      const res = await axios.request(config);
      return await res.data;
    } catch (error) {
      return { data: error.response.data };
    }
  },
  log: async (data) => {
    try {
      let config = {
        url: 'http://localhost:5000/api/auth/login',
        method: 'POST',
        data,
      };
      const res = await axios.request(config);
      return await res.data;
    } catch (error) {
      return { data: error };
    }
  },
};
