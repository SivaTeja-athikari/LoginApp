import {Text, View, Image, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';
import {moderateScale, verticalScale} from '../../Metrics';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

export default class Drawer extends Component {
  render() {
    return (
      <View
        style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#EAEEF3',
          flexDirection: 'row',
        }}>
        <View
          style={{
            width: moderateScale(120),
            height: moderateScale(495),
            borderWidth: 1,
            backgroundColor: '#FFFFFF',
          }}>
          <Image
            source={{
              uri: 'https://tejaorganics.com/wp-content/uploads/2021/04/teja-logo-big-1.png',
            }}
            style={{
              width: moderateScale(86),
              height: moderateScale(29),
              alignSelf: 'center',
              marginTop: moderateScale(30),
            }}
          />
          <View style={{marginTop: moderateScale(15)}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
              }}>
              <Foundation name="home" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(12),
                }}>
                Dashboard
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
                // alignSelf: 'center',
              }}>
              <Foundation name="graph-bar" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(12),
                }}>
                Revenue
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
                // alignSelf: 'center',
              }}>
              <FontAwesome5 name="shopping-bag" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(8),
                }}>
                Order
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
                // alignSelf: 'center',
              }}>
              <FontAwesome5 name="box-open" size={26} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(8),
                }}>
                Products
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
              }}>
              <Foundation name="camera" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(8),
                }}>
                Profile
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
              }}>
              <Foundation name="home" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(8),
                }}>
                Report
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: verticalScale(40)}}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
              }}>
              <Ionicons name="settings-sharp" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(8),
                }}>
                Setting
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: moderateScale(20),
                marginTop: moderateScale(18),
              }}>
              <Feather name="log-out" size={30} color="#989898" />
              <Text
                style={{
                  color: '#32373C',
                  fontWeight: '600',
                  fontSize: moderateScale(9),
                  paddingLeft: moderateScale(8),
                }}>
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={{
            width: moderateScale(26),
            height: moderateScale(26),
            backgroundColor: '#056839',
            borderTopRightRadius: moderateScale(6),
            borderBottomRightRadius: moderateScale(6),
            marginTop: moderateScale(18),
          }}>
          <EvilIcons
            name="close"
            size={35}
            color="#FFFFFF"
            style={{padding: 10}}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
