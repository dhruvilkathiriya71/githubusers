import axios from 'axios';
import { baseURL } from './apiConstants';

export const makeAPIRequest = ({ method, url, data, headers, params }) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method: method,
      baseURL: baseURL,
      url: url,
      data: data,
      headers: headers,
      params: params,
    };
    await axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response);
        } else {
          reject(response);
        }
      })
      .catch(async error => {
        reject(error);
      });
  });
