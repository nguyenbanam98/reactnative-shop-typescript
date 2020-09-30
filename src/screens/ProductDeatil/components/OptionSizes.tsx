import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import dataSize, { Size } from '../../../datas/dataSize'

export default function componentName() {

  const [indexSize, setIndexSize] = useState(-1)

  return (
    <>
      <Text style={styles.txtName}>Ao bong da Liverpool nam 2018</Text>
      <Text style={styles.txtBrand}>NIKE</Text>
      <Text style={styles.txtPrice}>$130</Text>
      <View style={styles.line}></View>
      <View style={{
        flexDirection: 'row',
        marginHorizontal: 16,
        alignItems: 'center',
        marginVertical: 24,
        paddingLeft: 2
      }}>
        <Text style={{ marginRight: 10, fontSize: 16 }}>Size</Text>
        {
          dataSize.map((item: Size, index: number) => {
            let isChoice = index === indexSize
            let backgroundColor;
            const setBackgroundColor = () => {
              if (item.type === 0) return backgroundColor = '#f6f5f5';
              if (isChoice) return backgroundColor = '#212121';
              return backgroundColor = '#f4f4f4'
            }

            return (
              <TouchableOpacity key={item.id} style={{
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: setBackgroundColor(),
                borderWidth: item.type === 1 ? 1 : 0,
                borderColor: '#aaaaaa',
                marginRight: 16
              }}
                disabled={item.type === 0}
                onPress={() => setIndexSize(index)}
              >
                <Text style={{ fontSize: 16, color: isChoice ? '#FFF' : '#455A64' }}>{item.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  txtName: {
    fontSize: 18,
    textAlign: "center",
    marginHorizontal: 10,
    color: '#212121',
  },
  txtBrand: {
    textAlign: "center",
    fontSize: 14,
    color: "#AEB6BF"
  },
  txtPrice: {
    textAlign: "center",
    fontWeight: 'bold'
  },
  line: { backgroundColor: "#CACFD2", marginHorizontal: 10, marginTop: 10, height: 1 }
});