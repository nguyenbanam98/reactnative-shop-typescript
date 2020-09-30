import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";

const ItemProduct = () => {
  const navigation = useNavigation();
  const onGoDetail = useCallback(() => {
    navigation.navigate('ProductDeatil')
  }, [])
  return (
    <TouchableOpacity
      style={{
        paddingVertical: 12,
        paddingHorizontal: 16,
        flexDirection: 'row'
      }}
      onPress={onGoDetail}
    // onPress={onGoDetail}
    >
      <Image source={require('../../../assets/Image.png')} style={{
        height: 112,
        width: 112
      }} />
      <View style={{ marginLeft: 16, flex: 1 }}>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 14,
            color: '#263238',
            marginBottom: 6,
            textTransform: 'uppercase',
          }}
          numberOfLines={2}
        >Argentina Authentic Jersey 2018</Text>
        <Text style={{
          fontSize: 14,
          color: '#78909C',
          marginBottom: 12
        }}>Adidas</Text>
        <Text style={{
          color: '#263238',
          fontSize: 16,
          fontWeight: 'bold'
        }}>$130</Text>
      </View>
      <Text style={{
        position: 'absolute',
        right: 24,
        bottom: 37,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#2196F3',
      }}>Add to Cart</Text>
    </TouchableOpacity>
  )
}

export default ItemProduct;
