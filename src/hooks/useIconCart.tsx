import { useLayoutEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet, View } from 'react-native';
import { Product } from "../datas/DataProduct";


const useIconCart = (dataCart: Product[]) => {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => {
          navigation.navigate('Cart', { dataCart: dataCart })
        }}>
          <Image
            source={require('../assets/Icon2.png')}
            style={styles.ic_cart}
          />
          <View style={styles.badge}>
            <Text style={styles.txtNumber}>{dataCart.length}</Text>
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, dataCart]);
}
export default useIconCart;
const styles = StyleSheet.create({
  ic_cart: {
    width: 24,
    height: 24,
    marginRight: 14
  },
  badge: {
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: '#F44336',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 8,
    top: -4,
  },
  txtNumber: {
    fontSize: 11,
    color: '#FFFFFF'
  }
})
