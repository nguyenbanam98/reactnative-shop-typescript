import React, { useState, useCallback } from 'react';
import { StyleSheet, Text, SafeAreaView, View, ActivityIndicator } from 'react-native';
import Control from './Components/Control';
import Header from './Components/Header';
import ListProduct from './Components/ListProduct';
import GridList from './Components/GirdList';
import Search from './Components/Search';

const ProductSearch = () => {
  const [showGrid, setShowGrid] = useState(false);

  const onPressList = useCallback(() => {
    setShowGrid(false);
  }, []);
  const onPressGridList = useCallback(
    () => {
      setShowGrid(true);
    }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.txtTitle}>Authentic World Cup Kits</Text>
      <Search />
      <Control
        onPressList={onPressList}
        onPressGridList={onPressGridList}
        showGrid={showGrid}
      />
      {/* <ListProduct /> */}
      {
        showGrid ? <ListProduct /> : <GridList />
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
  }
});
