import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {black, blue, grey, white} from '../utils/color';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Rootstakparams} from '../utils/App';
import ListScreen from '../screen/ListScreen';

const LoginScreen = () => {
  const Navigation = useNavigation<NativeStackNavigationProp<Rootstakparams>>();
  return (
    <View style={styles.mainlogin}>
      <Text style={styles.TextA}>A</Text>
      <View>
        <Text style={styles.logintext}>Login to apparel</Text>
      </View>

      <View style={styles.inputscreen}>
        <TextInput placeholder="Username " style={styles.username}></TextInput>

        <TextInput placeholder="Password" style={styles.password}></TextInput>
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2889/2889676.png',
          }}
          style={styles.passwordicon}
        />

        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2102/2102647.png',
          }}
          style={styles.usericon}
        />
        <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/709/709612.png',
          }}
          style={styles.eye}
        />
      </View>
      <View>
        <Text style={styles.textopti}>Forgot Password?</Text>
      </View>
      {/* <View> */}
      <TouchableOpacity onPress={() => Navigation.navigate('listscreen')}>
        <Text style={styles.textlogin}>Login</Text>
      </TouchableOpacity>
      {/* </View> */}
      <View style={styles.viewor}>
        <View style={styles.border1}></View>
        <Text style={styles.textor}>OR</Text>
        <View style={styles.border2}></View>
      </View>
      <View style={styles.viewicon}>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/facebook.png')}
            style={styles.fbicon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/google-plus.png')}
            style={styles.googleplusicon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/apple.png')}
            style={styles.appleicon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.lasttext}>
        <View>
          <Text style={styles.option}>don't have an account?</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.signup}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  mainlogin: {
    alignItems: 'center',
  },
  TextA: {
    position: 'absolute',
    color: white,
    fontWeight: 'bold',
    fontSize: 38,
    borderRadius: 50,
    top: 80,
    width: 76,
    height: 76,
    paddingLeft: 25,
    paddingTop: 10,
    backgroundColor: '#6C70EB',
  },
  logintext: {
    paddingTop: 270,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: black,
    letterSpacing: 0.7,
  },
  inputscreen: {},
  username: {
    // position:'absolute',
    width: 366,
    height: 55,
    left: 3,
    paddingLeft: 59,
    borderRadius: 5,
    borderColor: black,
    // backgroundColor: blue,
    elevation: 3,
    top: 30,
  },
  password: {
    // position:'absolute',
    width: 366,
    height: 55,
    left: 3,
    elevation: 3,
    borderRadius: 5,
    top: 50,
    paddingLeft: 59,
  },
  usericon: {
    width: 20,
    height: 20,
    bottom: 83,
    left: 25,
  },
  passwordicon: {
    width: 20,
    height: 20,
    top: 13,
    left: 25,
  },
  eye: {
    width: 20,
    height: 20,
    bottom: 25,
    left: 330,
  },
  textopti: {
    fontWeight: '500',
    lineHeight: 50,
    color: black,
    letterSpacing: 0.7,
  },
  textlogin: {
    paddingTop: 12,
    fontSize: 20,
    fontWeight: '200',
    lineHeight: 30,
    color: white,
    letterSpacing: 0.7,
    backgroundColor: '#6C70EB',
    width: 366,
    height: 55,
    marginBottom: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  textor: {
    height: 20,
    width: 20,
    left: 75,
  },
  border1: {
    borderBottomWidth: 0.5,
    width: 170,
    right: 110,
    top: 10,
    paddingleft: 10,
  },
  border2: {
    borderBottomWidth: 0.5,
    width: 170,
    right: 130,
    top: 10,
    left: 110,
    marginTop: -20,
  },
  viewor: {
    top: 20,
  },
  fbicon: {
    marginRight: 15,
    top: 30,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  googleplusicon: {
    top: 30,
    marginRight: 35,
    marginLeft: 19,
    width: 35,
    height: 35,
  },
  appleicon: {
    top: 30,
    // marginRight: 5,

    width: 35,
    height: 35,
  },
  viewicon: {
    // position: 'absolute',
    flexDirection: 'row',
    alignContent: 'space-around',
    bottom: -35,
  },
  lasttext: {
    flexDirection: 'row',
    top: 120,
  },
  option: {
    fontWeight: '500',
    fontSize: 15,
  },
  signup: {
    fontWeight: '500',
    fontSize: 18,
    bottom: 2,
    marginLeft: 5,
    color: '#6C70EB',
  },
});

// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';

// const LoginScreen = () => {
//   return (
//     <View>
//       <Text>LoginScreen</Text>
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({});
