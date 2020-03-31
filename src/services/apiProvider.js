import API from './axiosConfig';
import * as url from './urls';

export default {
  //********************* */
  //activity
  getHistoryActive: params => {
    return API(url.HISTORY_ACTIVE, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params,
      },
    });
  },

  //old
  getHistoryOld: params => {
    return API(url.HISTORY_OLD, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params,
      },
    });
  },

  //********************* */

  //********************* */
  //account
  getHelp: params => {
    return API(url.FAQ, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
      },
    });
  },

  getCS: params => {
    return API(url.CS_NUMBER, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
      },
    });
  },

  getProfile: token => {
    console.log('token profile2', token);
    return API(url.PROFILE, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  },

  //nationality
  getNationality: params => {
    return API(url.NATIONALITY, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
      },
    });
  },

  //create passport
  createPassport: (params, token) => {
    return API(url.POST_PASSPORT, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: {
        ...params,
      },
    });
  },

  updatePassport: (params, token, id) => {
    return API(url.UPDATE_PASSPORT + id, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      body: {
        ...params,
      },
    });
  },

  deletePassport: (token, id) => {
    console.log('ids', id);
    return API(url.DELETE_PASSPORT + id, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    });
  },
  postUpdateProfile: params => {
    return API(url.UPDATE_PROFILE, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params.token,
      },
      body: {
        ...params,
      },
    });
  },

  //read passport
  getPassportData: params => {
    return API(url.GET_PASSPORT_LIST, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params,
      },
    });
  },

  //********************* */

  //auth
  loginProcess: params => {
    return API(url.LOGIN_PROCESS, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
      },
      body: {
        ...params,
      },
    });
  },
  registerProcess: params => {
    return API(url.REGISTER_PROCESS, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
      },
      body: {
        ...params,
      },
    });
  },

  //home
  getHomeData: () => {
    return API(url.HOME_DATA, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
      },
    });
  },

  //bookNow
  getScheduleBookNow: params => {
    return API(url.SCHEDULE_BOOK_NOW, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params.token,
      },
      body: {
        ...params,
      },
    });
  },

  getSchedule: params => {
    return API(url.SCHEDULE, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params.token,
      },
      body: {
        ...params,
      },
    });
  },

  //payment:
  getPaymentMethod: params => {
    return API(url.GET_PAYMENT_METHOD, {
      method: 'GET',
      head: {
        'Content-Type': 'application/json',
      },
    });
  },
  checkFerryVoucher: params => {
    return API(url.CHECK_FERRY_VOUCHER, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params.token,
      },
      body: {
        ...params,
      },
    });
  },
  bookNowPayment: params => {
    return API(url.BOOK_NOW_PAYMENT, {
      method: 'POST',
      head: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + params.token,
      },
      body: {
        ...params,
      },
    });
  },
};
