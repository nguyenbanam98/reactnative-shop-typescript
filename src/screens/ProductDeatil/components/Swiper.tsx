import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import dataSwiper, { ItemSwiper } from '../../../datas/DataSwiper'

const windowWidth = Dimensions.get('window').width;

export default function Swiper() {
  const [_index, setIndex] = useState(0)
  console.log('swiper');
  return (
    <>
      <View style={{ height: 250 }}>
        <ScrollView horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={
            (e) => {
              let x = e.nativeEvent.contentOffset.x;
              let index = x / windowWidth;
              setIndex(index)
            }}
        >
          {
            dataSwiper.map((item: ItemSwiper, index: number) => (
              <View style={styles.containerItem} key={item.id}>
                <Image style={styles.image} source={item.url} resizeMode="contain" />
              </View>
            ))
          }
        </ScrollView>
        <View style={styles.dots}>
          {
            dataSwiper.map((item: ItemSwiper, index: number) => (
              <View style={[styles.dot,
              { backgroundColor: index === _index ? '#78909C' : 'red' }
              ]}
                key={index} />
            ))
          }

        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    width: windowWidth,
    height: 250,
    backgroundColor: "#FFFFFF"
  },
  image: {
    width: "100%",
    height: "100%"
  },
  dots: {
    flexDirection: 'row',
    position: 'absolute',
    alignSelf: 'center',
    height: 0,
    bottom: 12,
    justifyContent: "space-between"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#78909C",
    marginHorizontal: 2

  },
})