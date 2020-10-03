
import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Product } from '../../../datas/DataProduct';
import OptionQuantity from '../../ProductDeatil/components/OptionQuantity';

interface ItemProductCartProps {
  product: Product;
  onChangeQti: (qti: number, index: number) => void;
  index: number;

}

const ItemProductCart = ({ product, ...props }: ItemProductCartProps) => {
  const [number, setNumber] = useState(1);
  return (
    <View style={styles.containerItem}>
      <View style={styles.containerName}>
        <Image
          style={styles.imgContainer}
          source={require('../../../assets/Image.png')}
        />
        <Text style={styles.txtNameItem}>
          {product.name}{"\n"}
          <Text style={styles.txtBrand}>${product.brand}</Text>
        </Text>

      </View>
      <View style={styles.containerQti}>
        <OptionQuantity
          style={styles.qti}
          callBackValue={number => {
            setNumber(number)
            props.onChangeQti(number, props.index)
          }
          }
        />
        <Text style={styles.txtPriceItem}>
          ${Math.round(number * product.price)}
        </Text>
      </View>
      <TouchableOpacity style={styles.btnDelete}>
        <Image source={require('../../../assets/ic_delete.png')} />
      </TouchableOpacity>
    </View >
  )
}

export default ItemProductCart;

const styles = StyleSheet.create({
  containerItem: {
    width: '100%'
  },
  containerName: {
    flexDirection: 'row',
    width: '70%',
    marginLeft: 16,
    marginTop: 24,

  },
  imgContainer: {
    height: 65,
    width: 65
  },
  txtNameItem: {
    fontSize: 14,
    color: '#263238',
    lineHeight: 18,
    flex: 1,
    textTransform: 'uppercase',
    marginLeft: 16
  },
  txtBrand: {
    color: '#78909C',
    lineHeight: 18
  },
  containerQti: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginTop: 20,
    marginBottom: 24
  },
  qti: {
    marginVertical: 0,
    marginLeft: 0,

  },
  txtPriceItem: {
    fontSize: 16,
    color: '#263238',
    fontWeight: 'bold',
    position: 'absolute',
    right: 0,
    top: 10
  },
  btnDelete: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 16,
    top: 24
  }
})
