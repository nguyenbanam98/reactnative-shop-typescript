import React from 'react'
import { Text, View } from 'react-native'

const Footer = () => {
    return (
        <View style={{
            height: 50,
            width: '100%',
            backgroundColor: '#263238',
            justifyContent: 'center',
            paddingLeft: 16,
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 14,
                color: '#ECEFF1'
            }}>© FIFA World Cup Kits 2018</Text>

        </View>

    )
}

export default Footer

