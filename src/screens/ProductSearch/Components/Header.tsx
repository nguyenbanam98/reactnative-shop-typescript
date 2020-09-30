import React from 'react';
import { Image, Text, View } from "react-native";
import Constants from 'expo-constants';


const Header = () => {

  return (
    <View style={{
      flexDirection: 'row',
      height: 56,
      alignItems: 'center',
      marginTop: Constants.statusBarHeight,
    }}>
      <Image
        source={require('../../../assets/Icon1.png')}
        style={{
          width: 24,
          height: 24,
          marginLeft: 14
        }}
      />
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 16,
          color: '#263238',
          fontWeight: 'bold',
        }}>FIFA World Cup Kits</Text>
      </View>
      <Image
        source={require('../../../assets/Icon2.png')}
        style={{
          width: 24,
          height: 24,
          marginRight: 14
        }}
      />
    </View>
  )
}
export default Header;
