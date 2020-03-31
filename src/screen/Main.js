/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  BackHandler,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {LOGOUT} from '../redux/types';
import {connect} from 'react-redux';

class Main extends React.Component {
   
   constructor() {
      super();
      this.state = {
         isLoading: false,
      };
   }
   
   componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }

   componentWillReceiveProps(nextProps) {
      // const resetAction = StackActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({routeName: 'Home'})],
      // });

      // this.props.navigation.dispatch(resetAction);
   }
   
   componentDidUpdate(prevProps, prevState) {
      
   }

   componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }
   
   render(){
      return (
         <ImageBackground source={require('../assets/BackgroundHome.jpg')} style={styles.imageBackground}>
            <View style={styles.content1}>
               <Image source={require('../assets/NavDrawerWhite.png')} style={styles.icon} />
               <Text style={styles.titleStyle} >Good Morning</Text>
            </View>
            <View style={styles.content2}>
               <TouchableOpacity onPress={()=> this.onPressSignUp()} style={styles.btnSignUp}>
                  <Text style={styles.textBtn}>SIGN UP</Text>
               </TouchableOpacity>
               <TouchableOpacity onPress={()=> this.onPressLogin()} style={styles.btnLogin}>
                  <Text style={styles.textBtn}>LOGIN</Text>
               </TouchableOpacity>
            </View>
         </ImageBackground>
      );
   }

   onPressSignUp = () => {
      // this.props.dispatch({type: LOGOUT});
      // this.props.navigation.navigate('Login');
   }

   onPressLogin = () => {
      this.props.navigation.navigate('Login');
   }

   handleBackButton = () => {
      // return 
   }

};

const mapStateToProps = ({mainReducer}) => ({
  main: mainReducer,
});

export default connect(mapStateToProps)(Main);

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
   },
   textBtn: {
      color: 'white',
   },
   titleStyle: {
      color: 'white',
      opacity: 0.7,
      marginLeft: 3,
      fontSize: 18
   },
   content1: {
      height: '70%',
      margin: 15,
   },
   content2: {
      height: '30%',
      margin: 10,
   },
   btnSignUp: {
      borderRadius: 5,
      alignItems: 'center',
      padding: 10,
      marginBottom: 15,
      borderWidth: 3,
      borderColor: 'rgb(29, 126,73)',
      backgroundColor: 'rgb(6,139,82)'
   },
   btnLogin: {
      borderRadius: 5,
      alignItems: 'center',
      padding: 10,
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor: 'transparent',
   }

});
