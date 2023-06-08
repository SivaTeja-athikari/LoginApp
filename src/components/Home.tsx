import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  BackHandler,
} from 'react-native';
import React, {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PermissionsAndroid} from 'react-native';
import Contacts from 'react-native-contacts';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
interface IProps {
  navigation: any;
  route: any;
}
interface IState {
  contacts: any[];
}

class Home extends Component<IProps, IState> {
  state = {
    contacts: [],
  };
  componentDidMount(): void {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
      buttonPositive: 'Please accept bare mortal',
    }).then(
      Contacts.getAll()
        .then(contacts => {
          const trimmedContacts = contacts
            .filter(c => c.phoneNumbers.length > 0)
            .map(c => {
              return {
                hasThumbnail: c['hasThumbnail'],
                thumbnailPath: c['thumbnailPath'],
                givenName: c['givenName'],
                familyName: c['familyName'],
                recordID: c['recordID'],
                phoneNumbers: c['phoneNumbers'],
              };
            });
          this.setState({contacts: trimmedContacts});
        })
        .catch(e => {
          console.log(e);
        }),
    );
  }
  handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('storedmail');
      await AsyncStorage.removeItem('storedpassword');
      this.props.navigation.navigate('Login');
    } catch (error) {
      console.log(error);
    }
  };
  onAndroidBackPress = async () => {
    const mail = await AsyncStorage.getItem('storedmail');
    const password = await AsyncStorage.getItem('storedpassword');
    if (mail !== null && password !== null) {
      BackHandler.exitApp();
      return true;
    }
    return false;
  };
  componentWillUnmount() {
    BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
  }
  render() {
    console.log(this.state.contacts[0]);
    return (
      <SafeAreaView style={{backgroundColor: '#202125'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: 'white', fontSize: 24, fontWeight: 'bold'}}>
            Contacts
          </Text>
          <Text
            style={{color: 'red', fontSize: 24}}
            onPress={this.handleLogout}>
            LogOut
          </Text>
        </View>
        <View>
          <FlatList
            data={this.state.contacts}
            renderItem={({item}: {item: any}) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <View>
                      <Image
                        style={{width: 50, height: 50, borderRadius: 25}}
                        source={{
                          uri: item.thumbnailPath
                            ? item.thumbnailPath
                            : 'https://www.pngfind.com/pngs/m/9-98950_contacts-icon-iphone-contact-icon-png-transparent-png.png',
                        }}
                      />
                      <View>
                        <Text
                          style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: '700',
                          }}>
                          {item.givenName}
                        </Text>
                        <Text style={{color: 'white'}}>
                          Phone :{item.phoneNumbers[0].number}
                        </Text>
                      </View>
                    </View>
                  </View>
                  <View>
                    <MaterialIcon
                      name="local-phone"
                      size={30}
                      color="#989898"
                    />
                  </View>
                </View>
              );
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;
