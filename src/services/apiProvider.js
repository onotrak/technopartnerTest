import API from './axiosConfig';
import * as url from './urls';

export default {
  //********************* */

  //LOGIN
  postLogin: (params, headers) => {
    return API(url.LOGIN_PROCESS, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: headers,
      },
      body: {
        ...params,
      },
    });
  },
  postReqLogin: params => {
    return API(url.REQ_LOGIN_PROCESS, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
      },
      body: {
        ...params,
      },
    });
  },

  //HOME
  postHome: (params, headers) => {
    return API(url.HOME_PROCESS, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: headers,
      },
      body: {
        ...params,
      },
    });
  },
  
  //MENU
  getMenu: params => {
    return API(url.MENU_PROCESS, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params,
      },
    });
  },
  
};
