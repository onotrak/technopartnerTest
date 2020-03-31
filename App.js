/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';

import {store, persistor} from './src/redux/store';
import RootStack from './src/navigations/RootStack';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar
          barStyle="light-content"
          backgroundColor='aqua'
        />
        <SafeAreaView style={styles.container}>
          <RootStack />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aqua',
  },
});

export default App;

console.disableYellowBox = true;
