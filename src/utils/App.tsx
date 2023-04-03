import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
import React, {Component} from 'react';
import LoginScreen from '../screen/LoginScreen';
import Firstpage from '../screen/FirstPage';
import ListScreen from '../screen/ListScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import drawer from '../screen/Drawer';
import DrawerExample from '../screen/DrawerExample';

const Stack = createNativeStackNavigator();

export type Rootstakparams = {
  firstpage: undefined;
  loginscreen: undefined;
  listscreen: undefined;
  drawer: undefined;
  // drawerexample: undefined;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="firstpage"
          component={Firstpage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="loginscreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="listscreen"
          component={ListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="drawer"
          component={drawer}
          options={{headerShown: true}}
        />
        {/* <Stack.Screen
          name="drawerexample"
          component={DrawerExample}
          options={{headerShown: true}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
// {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}

// import {Text, StyleSheet, View, DrawerLayoutAndroid} from 'react-native';
// import React, {Component} from 'react';
// import FirstPage from '../screen/FirstPage';
// import DrawerExample from '../screen/DrawerExample';

// export default class App extends Component {
//   render() {
//     return <DrawerExample />;
//   }
// }
