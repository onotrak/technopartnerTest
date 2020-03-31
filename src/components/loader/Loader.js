import React from 'react';
import {
  View,
  Modal,
  SafeAreaView,
  Image,
} from 'react-native';
import styles from './LoaderStyle';

const Loader = ({show, type}) => {
  return (
    <Modal visible={show} transparent={true}>
      <SafeAreaView>
        <View style={styles.container}>
          <Image source={require('../../assets/Loading.gif')} style={styles.imageStyle} />
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default Loader;
