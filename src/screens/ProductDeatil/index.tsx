import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

// import Header from '../ProductSearch/Components/Header';
import Swiper from './components/Swiper';
import OptionSizes from './components/OptionSizes';
import OptionKits from './components/OptionKits';
import OptionQuantity from './components/OptionQuantity';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Customize, InfoProduct, Shipping } from './components/NextItem';
import { LinearGradient } from 'expo-linear-gradient';
import Line from './components/Line';
import dataProductRelated, { ProductRelated } from '../../datas/dataProductRelated'

const ProductDeatil: React.FC = () => {

  return (
    <>
      <ScrollView style={styles.detailContainer}>
        {/* <Header /> */}
        <Swiper />
        <OptionSizes />
        <OptionKits />
        <OptionQuantity />
        <Customize />

        <TouchableOpacity>
          <LinearGradient
            colors={['#00BCD4', '#00ACC1']}
            style={{
              padding: 15,
              alignItems: 'center',
              borderRadius: 20,
              marginHorizontal: 32,
              marginVertical: 24
            }}
          >
            <Text
              style={{
                fontSize: 14,
                color: '#fff',
                fontWeight: 'bold',
                textTransform: 'uppercase'
              }}>
              Add to Cart
                </Text>
          </LinearGradient>
        </TouchableOpacity>
        <Line />
        <InfoProduct />
        <Shipping />
        <Line />
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#78909C',
          marginLeft: 16,
          marginTop: 24,
          marginBottom: 16
        }}>You May Also Like</Text>

        <ScrollView horizontal={true}
          style={{ backgroundColor: '#FFF' }}
          showsHorizontalScrollIndicator={false}
        >
          {
            dataProductRelated.map((item: ProductRelated, index: number) => {
              return (
                <TouchableOpacity key={index} style={{
                  width: 168,
                  marginRight: 8
                }}>
                  <View style={{
                    width: 168,
                    height: 168,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#ECEFF1',

                  }}>
                    <Image source={item.url} />
                  </View>
                  <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#263238'
                  }} numberOfLines={2}>{item.name}</Text>
                  <Text style={{
                    fontSize: 16,
                    color: '#78909C'
                  }}>${item.price}</Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>


      </ScrollView>
    </>
  );
}
const styles = StyleSheet.create({
  detailContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    // marginBottom: 40
  },

});
export default ProductDeatil;