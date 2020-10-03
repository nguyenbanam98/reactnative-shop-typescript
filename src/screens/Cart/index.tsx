import { useRoute } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Footer from '../../components/Footer';
import useIconCart from '../../hooks/useIconCart';
import { CartScreenRouteProp } from '../../types/nav';
import ItemProductCart from './components/ItemProductCart';

const Cart = () => {

  const route = useRoute<CartScreenRouteProp>()
  const [dataCart, setDataCart] = useState(route.params.dataCart)

  useIconCart(dataCart)

  const onChangeQti = useCallback((number, index) => {
    setDataCart((dataCart) => {
      dataCart[index].qti = number;
      return [...dataCart];
    })
  }, [])

  const renderItem = useCallback(
    ({ item, index }) => {
      return (
        <ItemProductCart product={item} index={index} onChangeQti={onChangeQti} />

      )
    }, []
  )
  const renderSeparator = useCallback(() => {
    return (
      <View style={styles.separator} />
    )
  }, []);

  let subtotal = 0;
  for (let i = 0; i < dataCart.length; i++) {
    let qti = dataCart[i].qti || 1;
    subtotal = Math.round(subtotal + qti * dataCart[i].price);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.txtYourCart}>Your Cart</Text>
      <FlatList
        data={dataCart}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={renderSeparator}
      />
      <View style={styles.containerPrice}>
        <View style={styles.rowPrice}>
          <Text style={styles.txtTitleRow}>Subtotal</Text>
          <Text style={styles.txtPrice}>${subtotal}</Text>
        </View>
        <View style={styles.rowPrice}>
          <Text style={styles.txtTitleRow}>Shipping</Text>
          <Text style={styles.txtPrice}>___</Text>
        </View>
        <View style={styles.rowPrice}>
          <Text style={styles.txtTitleRow}>Taxes</Text>
          <Text style={styles.txtPrice}>___</Text>
        </View>
        <View style={styles.rowPrice}>
          <Text style={styles.txtTotal}>Total</Text>
          <Text style={styles.txtTotalPrice}>$222</Text>
        </View>
      </View>

      <View style={styles.containerButton}>
        <TouchableOpacity style={styles.btnBack}>
          <Text style={styles.txtBack}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnCheckout}>
          <Text style={styles.txtCheckout}>Continue to Checkout</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  txtYourCart: {
    fontSize: 22,
    color: '#78909C',
    // marginTop: 8,
    marginBottom: 24,
    marginLeft: 16,
    fontWeight: 'bold'
  },
  containerPrice: {
    marginHorizontal: 16,
    backgroundColor: '#F7F9F9',
  },
  rowPrice: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16
  },
  txtTitleRow: {
    fontSize: 12,
    color: '#37474F',
    opacity: 0.64
  },
  txtPrice: {
    fontSize: 12,
    color: '#37474F',
    opacity: 0.64,
    fontWeight: 'bold'
  },
  txtTotal: {
    fontSize: 14,
    color: '#263238',
    fontWeight: 'bold'
  },
  txtTotalPrice: {
    fontSize: 14,
    color: '#263238',
    fontWeight: 'bold'
  },
  containerButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "center",
    marginHorizontal: 16,
    marginTop: 15,
    marginBottom: 20
  },
  btnBack: {
    width: '21%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtBack: {
    fontSize: 14,
    color: '#2196F3',
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  btnCheckout: {
    height: 40,
    backgroundColor: '#00ACC1',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '65%'
  },
  txtCheckout: {
    color: '#FFF',
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  separator: {
    height: 1,
    backgroundColor: 'rgba(38, 50, 56, 0.12)',
    marginHorizontal: 16,
  },

})
