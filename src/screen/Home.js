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
  ScrollView,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';
import {RESET_HOME} from '../redux/types';
import Loader from '../components/loader/Loader';
import {convertCurrency} from '../components/helpers/helpers';

class Home extends React.Component {
   
   constructor() {
      super();
      this.state = {
         naik: false,
         isLoading: true,
         homeData: null,
      };
   }
   
   componentDidMount() {
      console.log('onotrak home', this.props.main)
      if(this.props.main.homeDataSuccess){
         this.setState({
            isLoading: false,
            homeData: this.props.main.homeData
         })
      }
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
   }

   componentWillReceiveProps(nextProps) {
      if(nextProps.main.homeDataSuccess){
         this.setState({
            isLoading: false,
            homeData: this.props.main.homeData
         })
      }
   }
   
   componentDidUpdate(prevProps, prevState) {
      const {homeDataSuccess, homeDataError} = this.props.main;
      if (homeDataSuccess || homeDataError) {
         setTimeout(() => {
            this.props.dispatch({type: RESET_HOME});
         }, 500);
      }
   }

   componentWillUnmount() {
      BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
   }
   
   render(){
      console.log('onotrak render', this.props.main)
      const {naik} = this.state;
      const {homeData} = this.state;

      return (
         <ImageBackground source={require('../assets/BackgroundHome.jpg')} style={styles.imageBackground}>
            <Loader show={this.state.isLoading} />
            <View style={[styles.content1, {flex: naik ? 0.35 : 0.65}]}>
               <TouchableOpacity>
                  <Image source={require('../assets/NavDrawerWhite.png')} style={styles.icon} />
               </TouchableOpacity>
               <Text style={styles.titleStyle}>{homeData && homeData.salam}</Text>
               <Text style={styles.titleStyle}>{homeData && homeData.username}</Text>
               <Text style={styles.titleStyle}>{homeData && convertCurrency(homeData.balance, 'IDR ')}</Text>
               <Text style={styles.titleStyle}>{homeData && homeData.beans} Beans</Text>
            </View>
            <View
               style={[styles.content2],{flex: naik ? 0.65 : 0.35, }}
            >
               <View style={styles.content2}>
                  <Text style={styles.text2}>Prime to Pay</Text>
                  <View style={styles.line}/>
                  <Text style={[styles.text3], {marginBottom: 5}}>Show below OR Code to the cashier</Text>
                  <Text style={styles.text2}>Kartu Satu</Text>
                  <View style={{width: '68%', flexDirection: 'row', justifyContent: 'space-between'}}>
                     <Text style={styles.text4}>Balance</Text>
                     <Text style={styles.text2}>{homeData && convertCurrency(homeData.balance, 'IDR ')}</Text>
                  </View>
                  <View style={{width: '68%', flexDirection: 'row', justifyContent: 'space-between'}}>
                     <Text style={styles.text4}>Beans</Text>
                     <Text style={styles.text2}>{homeData && homeData.beans}</Text>
                  </View>
                  <Image source={{uri: homeData && homeData.primaryCard.barcode}} style={styles.imageStyle} />
               </View>
            </View>
            <View style={{ position: 'absolute', bottom: 0, zIndex: 99, height: 400, width: '100%'}}>
            <ScrollView 
               style={{height: 400, width: '100%'}}
               onMomentumScrollBegin={ ({nativeEvent}) => {
                  if (this._topToClose(nativeEvent)) {
                        this.setState({ naik: false });
                  }else{this.setState({naik: true})}
               }}
               showsVerticalScrollIndicator={false}
            ><View style={{height: 240}}/><View style={{height: 240}}/>
            </ScrollView>
            </View>
         </ImageBackground>
      );
   }

   _topToClose = ({ contentOffset }) => {
       return contentOffset.y <= 0 && contentOffset.x <= 0 ;
   };

   handleBackButton = () => {
      return this.props.navigation.navigate('Main')
   }

};

const mapStateToProps = ({mainReducer}) => ({
  main: mainReducer,
});

export default connect(mapStateToProps)(Home);
// export default Home;

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
   text2: {
      color: 'black',
      opacity: 0.9
   },
   text3: {
      color: 'black',
      opacity: 0.6
   },
   text4: {
      color: 'rgb(6,139,82)',
      opacity: 0.9
   },
   line: {
      height: 3,
      marginVertical: 10,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
      opacity: 0.7,
   },
   imageStyle: {
      resizeMode: 'contain',
      height: 200,
      width: 200,
      marginTop: 10,
      alignSelf: 'center'
   },
   titleStyle: {
      color: 'white',
      opacity: 0.7,
      marginLeft: 3,
      fontSize: 18
   },
   content1: {
      // height: '25%',
      padding: 15,
   },
   content2: {
      height: '100%',
      backgroundColor: 'white',
      opacity: 0.7,
      padding: 15,
      // bottom: 0,
      // position: 'absolute'
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

