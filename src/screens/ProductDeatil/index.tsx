import React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from '../ProductSearch/Components/Header';
import Swiper from './components/Swiper';
import OptionSizes from './components/OptionSizes';
import OptionKits from './components/OptionKits';
import OptionQuantity from './components/OptionQuantity';
import { ScrollView } from 'react-native-gesture-handler';
import { Customize, InfoProduct, Shipping } from './components/NextItem'

const ProductDeatil: React.FC = () => {

  return (
    <>
      <ScrollView style={styles.detailContainer}>
        <Header />
        <Swiper />
        <OptionSizes />
        <OptionKits />
        <OptionQuantity />
        <Customize />
        <InfoProduct />
        <Shipping />
      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

});
export default ProductDeatil;