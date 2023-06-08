import {
  ImageBackground,
  Text,
  TextInput,
  View,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const bgimage = require('./images/bgimage2.jpg');

interface IProps {
  navigation: any;
  route: any;
}
interface IState {
  email: string;
  password: string;
  storedMail: string;
  storedPassword: string;
  error: boolean;
}

class Login extends Component<IProps, IState> {
  state = {
    email: '',
    password: '',
    storedMail: '',
    storedPassword: '',
    error: false,
  };

  componentDidMount() {
    this.loadTodos();
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem(
        'storedmail',
        JSON.stringify(this.state.email),
      );
      await AsyncStorage.setItem(
        'storedpassword',
        JSON.stringify(this.state.password),
      );
    } catch (error) {
      console.log(error);
    }
  };

  loadTodos = async () => {
    try {
      const todos = await AsyncStorage.getItem('storedmail');
      const passwordd = await AsyncStorage.getItem('storedpassword');
      if (todos !== null && passwordd !== null) {
        this.setState({storedMail: todos, storedPassword: passwordd});
      }
      if (todos !== null) {
        this.props.navigation.navigate('Contacts');
      }
    } catch (error) {
      console.log(error);
    }
  };
  handleNavigation = async () => {
    this.storeData();
    try {
      const todos = await AsyncStorage.getItem('storedmail');
      const passwordd = await AsyncStorage.getItem('storedpassword');
      if (todos !== null && passwordd !== null) {
        this.setState({storedMail: todos, storedPassword: passwordd});
        this.props.navigation.navigate('Contacts');
      }
    } catch (error) {
      console.log(error);
    }
  };

  handleEmailText = (text: string) => {
    this.setState({email: text});
  };
  handlePassword = (text: string) => {
    this.setState({password: text});
  };
  render() {
    // console.log(this.state.storedMail, this.state.storedPassword);
    // // const newpassword = this.props.route.params.newpassword;
    // console.log(this.state.storedMail, this.state.storedPassword);
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <ImageBackground
            source={bgimage}
            resizeMode="stretch"
            style={{
              width: Dimensions.get('window').width,
              height: Dimensions.get('window').height,
              justifyContent: 'center',
            }}>
            <View>
              <Text style={styles.loginText}>Log in</Text>
            </View>
            <View style={styles.cardContainer}>
              <TextInput
                placeholder="Email"
                placeholderTextColor={'#939999'}
                onChangeText={this.handleEmailText}
                style={{
                  borderWidth: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 14,
                  color: 'black',
                }}
              />
              {this.state.email === '' ||
              !this.state.email.includes('@gmail.com') ? (
                <Text
                  style={{
                    color: 'red',
                    fontWeight: '800',
                    fontSize: 16,
                    padding: 0,
                    marginBottom: 14,
                  }}>
                  Email is required
                </Text>
              ) : (
                ''
              )}
              <TextInput
                placeholder="Password"
                placeholderTextColor={'#939999'}
                onChangeText={this.handlePassword}
                style={{
                  borderWidth: 1,
                  backgroundColor: '#ffffff',
                  borderRadius: 8,
                  padding: 12,
                  fontSize: 14,
                  marginBottom: 20,
                  color: 'black',
                }}
              />
              {this.state.storedMail !== null ? (
                <Text
                  style={{textAlign: 'center', fontSize: 18, fontWeight: '600'}}
                  onPress={this.handleNavigation}>
                  Login
                </Text>
              ) : (
                <Text
                  style={{
                    borderWidth: 1,
                    backgroundColor: '#CDE7BE',
                    borderRadius: 8,
                    color: '#313333',
                    padding: 12,
                    fontSize: 14,
                    textAlign: 'center',
                    fontWeight: '800',
                    marginBottom: 14,
                  }}>
                  Login
                </Text>
              )}
            </View>
          </ImageBackground>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  loginText: {
    fontSize: 32,
    fontWeight: '900',
    paddingLeft: 32,
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: 'rgba(49, 51, 51, 0.5)',
    borderRadius: 12,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: 6,
    marginRight: 6,
  },
});
export default Login;
