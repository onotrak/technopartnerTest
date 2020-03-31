import axios from 'axios';

const API = async (
  url,
  options = {
    method: 'GET',
    body: {},
  },
) => {
  const request = {
    baseURL: 'https://dev.marlinbooking.co.id/',
    method: options.method,
    timeout: 100000,
    url,
    headers: options.head,
    responseType: 'json',
  };
  if (request.method === 'POST') request.data = options.body;
  const res = await axios(request);

  if (res.status === 200) {
    return res.data;
  } else {
    throw res;
  }
};

export default API;
