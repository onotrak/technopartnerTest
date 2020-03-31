import {
  
  //LOGIN
  RESET_LOGIN,
  REQ_LOGIN_SUCCESS,
  REQ_LOGIN_ERROR,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,

  //HOME
  RESET_HOME,
  HOME_DATA,
  HOME_DATA_ERROR,

  //MENU
  RESET_MENU,
  MENU_DATA,
  MENU_DATA_ERROR,

} from './types';
import {mainInitialState as initialState} from './initialState';

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    
    //LOGIN
    case RESET_LOGIN:
      return {
        ...state,
        reqLoginSuccess: false,
        reqLoginError: false,
        reqLoginData: {},
        loginSuccess: false,
        loginError: false,
        loginData: {}
      };
    case REQ_LOGIN_SUCCESS:
      return {
        ...state,
        reqLoginData: action.response,
        authorization: action.response.token_type+' '+action.response.access_token,
        reqLoginSuccess: true,
      };
    case REQ_LOGIN_ERROR:
      return {
        ...state,
        reqLoginData: action.response,
        reqLoginError: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loginData: action.response,
        userData: action.response,
        isLoggedin: true,
        loginSuccess: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginData: action.response,
        loginError: true,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedin: false,
        userData: {},
        authorization: ''
      };

    //HOME
    case RESET_HOME:
      return {
        homeDataSuccess: false,
        homeDataError: false,
      };
    case HOME_DATA:
      return {
        ...state,
        homeData: action.response,
        homeDataSuccess: true,
      };
    case HOME_DATA_ERROR:
      return {
        ...state,
        // homeData: action.response,
        homeDataError: true,
      };

    //MENU
    case RESET_MENU:
      return {
        menuDataSuccess: false,
        menuDataError: false,
      };
    case MENU_DATA:
      return {
        ...state,
        menuData: action.response,
        menuDataSuccess: true,
      };
    case MENU_DATA_ERROR:
      return {
        ...state,
        // menuData: action.response,
        menuDataError: true,
      };
    default:
      return state;
  }
};

export default mainReducer;
