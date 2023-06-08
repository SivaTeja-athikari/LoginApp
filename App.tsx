import React, {Component} from 'react';
import SplashScreen from 'react-native-splash-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Drawer from './src/components/Drawer';
import Contacts from './src/components/Contacts';
import AddContact from './src/components/AddContact';
const Stack = createNativeStackNavigator();
class App extends Component {
  render() {
    return (
      <NavigationContainer onReady={SplashScreen.hide()}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Contacts" component={Contacts} />
          <Stack.Screen name="AddContact" component={AddContact} />
          <Stack.Screen
            name="Drawer"
            component={Drawer}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
