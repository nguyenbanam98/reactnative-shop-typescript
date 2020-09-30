import React, { useState, useCallback, useContext } from 'react';
import { FlatList, View, StyleSheet, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import dataProduct, { Product } from '../../../datas/DataProduct';
const windowWidth = Dimensions.get('window').width;

const keyExtractor = (item: Product, index: number) => index.toString();

interface ItemProduct {
  index: number;
  // url: string;
  name: string;
  price: number;
  brand: string;
  item: Product
}

const Item = (props: ItemProduct) => {
  return (
    <TouchableOpacity
      style={[styles.item, { marginLeft: props.index % 2 === 1 ? 20 : 0 }]}
    >
      <Image
        source={require('../../../assets/Image.png')}
        style={styles.logo}
      />
      <Text style={styles.title} numberOfLines={3}>{props.name}</Text>
      <Text style={styles.author}>{props.brand}</Text>
      <Text style={styles.price}>${props.price}</Text>
      <TouchableOpacity style={{
        position: 'absolute',
        right: 12,
        bottom: 15
      }}
      >
        <Text style={styles.txtCart}>ADD TO CART</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

interface GridListProps {
}

const GridList = (props: GridListProps) => {

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    //call api , lay data tren server
    setTimeout(() => {
      setRefreshing(false)
    }, 2000);
  }, []);

  const empty = useCallback(() => <Text>Không có dữ liệu</Text>, []);
  const renderItem = useCallback(
    ({ item, index }: { item: Product, index: number }) => <Item
      index={index}
      name={item.name}
      brand={item.brand}
      price={item.price}
      item={item}
    />
    , []);
  return (
    <View style={styles.container}>
      <FlatList
        data={dataProduct}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={2}
        ListEmptyComponent={empty}
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
  item: {
    width: (windowWidth - 52) / 2,
    marginBottom: 20
  },
  title: {
    fontSize: 12,
    color: '#263238',
    marginTop: 12,
    marginLeft: 12
  },
  author: {
    fontSize: 14,
    color: '#78909C',
    marginLeft: 12,
    marginTop: 6
  },
  price: {
    color: '#263238',
    marginLeft: 12,
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 14
  },
  txtCart: {
    color: '#2196F3',
    fontSize: 12,
    fontWeight: 'bold',

  },
  logo: {
    width: (windowWidth - 52) / 2,
    height: (windowWidth - 52) / 2,
  }
});

export default GridList;
