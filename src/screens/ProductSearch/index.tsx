import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Control from './Components/Control';
import ListProduct from './Components/ListProduct';
import GridList from './Components/GirdList';
import Search from './Components/Search';
import { Product } from '../../datas/DataProduct';

import useIconCart from '../../hooks/useIconCart';

const ProductSearch = () => {
  const [dataCart, setDataCart] = useState<Product[]>([])
  const [showGrid, setShowGrid] = useState(false);

  useIconCart(dataCart)


  const onPressList = useCallback(() => {
    setShowGrid(false);
  }, []);
  const onPressGridList = useCallback(
    () => {
      setShowGrid(true);
    }, []);

  const addToCart = useCallback((item: Product) => {

    setDataCart(dataCart => {
      const isIndex = (e: Product) => e.id === item.id;
      const index = dataCart.findIndex(isIndex)
      item.qti = 1;
      if (index === -1) return [...dataCart.concat([item])]
      return dataCart
    })
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header /> */}
      <Text style={styles.txtTitle}>Authentic World Cup Kits</Text>
      <Search />
      <Control
        onPressList={onPressList}
        onPressGridList={onPressGridList}
        showGrid={showGrid}
      />
      {/* <ListProduct /> */}
      {
        showGrid ? <ListProduct /> : <GridList onAddToCart={addToCart} />
      }

    </SafeAreaView>
  );
}
export default ProductSearch;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  },
  txtTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#78909C',
    marginLeft: 16,
    marginTop: 20
  },


});
