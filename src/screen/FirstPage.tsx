import {Text, StyleSheet, View, Image} from 'react-native';
import React, {Component} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';

const Firstpage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();
  setTimeout(() => {
    navigation.replace('loginscreen');
  }, 2500);

  return (
    <View style={styles.mainpage}>
      <Image
        source={require('../assets/image/listpicture.png')}
        style={styles.firsticon}
      />
      <Text style={styles.textfirst}>My Notes</Text>
    </View>
  );
};

export default Firstpage;

const styles = StyleSheet.create({
  firsticon: {
    width: 200,
    height: 200,
    left: 15,
    top: 10,
  },
  mainpage: {
    flex: 1,
    backgroundColor: '#6C70EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textfirst: {
    fontSize: 55,
    fontWeight: 'bold',
    color: 'white',
  },
});
