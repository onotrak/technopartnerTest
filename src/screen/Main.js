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
} from 'react-native';

class Main extends React.Component {
   render(){
      return (
         <View styl={styles.container}>
            <Text style={styles.textStyle}>
               Welcome
            </Text>
            <Text style={styles.textStyle}>
               ONOTRAK Starter
            </Text>
         </View>
      );
   }
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'aqua',
   },
   textStyle: {
      textAlign: 'center',
      fontWeight: 'bold',
},
});

export default Main;
