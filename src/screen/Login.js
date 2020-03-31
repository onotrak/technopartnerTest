/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {connect} from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
  TextInput,
} from 'react-native';
import {validateEmail} from '../components/helpers/helpers';
import Loader from '../components/loader/Loader';
import {mainAction} from '../redux/actions';
import {RESET_LOGIN} from '../redux/types';

class Login extends React.Component {
   
   constructor() {
      super();
      this.state = {
         email: 'support@technopartner.id',
         password: '1234567',
         // email: '',
         // password: '',
         isLoading: false,
      };
   }
   
   componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }

   componentWillReceiveProps(nextProps) {
   
      const {dispatch} = this.props;
      const {email, password} = this.state;
      const {loginSuccess, loginError, loginData, userData, reqLoginSuccess, reqLoginError, reqLoginData, authorization } = nextProps.main;

      if(reqLoginSuccess){
         const headers = authorization
         const params = {
            email,
            password,
         };
         dispatch(mainAction.postLogin(params, headers));
      }
      if(loginSuccess || loginError){
         if(loginSuccess){
            const params = {
               token: userData.token
            }
            const headers = authorization
            dispatch(mainAction.postHome(params, headers));
            this.props.navigation.navigate('Home')
         }
         loginError && alert(loginData.error_description)
         this.setState({isLoading: false})
      }
   }

   componentDidUpdate() {
      const {loginSuccess, loginError, reqLoginSuccess, reqLoginError } = this.props.main;
      if (loginSuccess || loginError || reqLoginSuccess || reqLoginError) {
         setTimeout(() => {
            this.props.dispatch({type: RESET_LOGIN});
         }, 500);
      }
   }

   componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }

   render(){
      return (
         <ImageBackground source={require('../assets/BackgroundLogin.jpg')} style={styles.imageBackground}>
            <Loader show={this.state.isLoading} />
            <View style={styles.content1}>
               <Image source={require('../assets/NavDrawerWhite.png')} style={styles.icon} />
               <Text style={styles.titleStyle}>Login</Text>
            </View>
            <View style={styles.content2}>
               <Text style={styles.textInputTitle}>Email address</Text>
               <TextInput 
                  style={styles.textInputStyle}
                  onChangeText={(text)=> this.setState({email: text})}
                  value={this.state.email}
               />
               <Text style={styles.textInputTitle}>Password</Text>
               <TextInput 
                  style={styles.textInputStyle}
                  onChangeText={(text)=> this.setState({password: text})}
                  value={this.state.password}
               />
               <TouchableOpacity onPress={()=> this.onPressLogin()} style={styles.btnLogin}>
                  <Text style={styles.textBtn}>LOGIN</Text>
               </TouchableOpacity>
               <Text style={styles.textStyle}>Not registered yet? Sign up here</Text>
               <Text style={styles.textStyle}>Forgot Password?</Text>
            </View>
         </ImageBackground>
      );
   }

   onPressLogin = async () => {
      const {dispatch} = this.props;
      const {email, password} = this.state;

      if (!email || !password) return alert('Email & Password is required!');
      if (!validateEmail(email)) return alert('Format email invalid');

      const params = {
         client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
         client_id: 'e78869f77986684a',
         grant_type: 'password',
         username: email,
         password,
      };
      
      await this.setState({isLoading: true});
      dispatch(mainAction.postReqLogin(params));
   }
   
   handleBackButton = () => {
      return this.props.navigation.navigate('Main')
   }
};

const mapStateToProps = ({mainReducer}) => ({
  main: mainReducer,
});

export default connect(mapStateToProps)(Login);

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   imageBackground: {
      flex: 1,
      resizeMode: "cover",
   },
   icon: {
      height: 20,
      width: 20,
      marginBottom: 15,
      position: 'absolute',
      left: 15,
      marginTop: 15,
   },
   titleStyle: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500'
   },
   content1: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingTop: 15,
      marginBottom: 5,
   },
   content2: {
      margin: 15,
   },
   textInputStyle: {
      backgroundColor: 'white',
      opacity: 0.3,
      paddingHorizontal: 10,
      marginBottom: 10,
   },
   textInputTitle: {
      color: 'white',
      marginBottom: 10,
      opacity: 0.6,
      fontSize: 15,
   },
   btnLogin: {
      alignItems: 'center',
      padding: 10,
      marginTop: 15,
      borderWidth: 3,
      borderColor: 'rgb(29, 126,73)',
      backgroundColor: 'rgb(6,139,82)'
   },
   textBtn: {
      color: 'white',
   },
   textStyle: {
      color: 'white',
      opacity: 0.6,
      fontSize: 15,
      marginVertical: 10,
      textAlign: 'center'
   },

});

