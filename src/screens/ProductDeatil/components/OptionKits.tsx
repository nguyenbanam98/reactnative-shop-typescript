import React, { useState } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
const dataSize = [
  {
    id: '0',
    name: 'HOME',
    type: 1 //het size
  },
  {
    id: '1',
    name: 'AWAY',
    type: 1//con size
  },
  {
    id: '2',
    name: 'THIRD',
    type: 1//con size
  }
];

const OptionKits = () => {
  const [indexSize, setIndexSize] = useState(-1);

  return (
    <View style={{
      flexDirection: 'row',
      marginHorizontal: 16,
      alignItems: 'center',
      marginVertical: 24,
      paddingLeft: 12
    }}>
      <Text style={{
        fontSize: 16,
        color: '#263238',
        marginRight: 19,
        fontWeight: 'bold'
      }}>Kits</Text>
      {
        dataSize.map((item, index) => {
          let outOfStock = item.type === 0;
          let isChosen = index === indexSize;
          let backgroundColor;
          if (outOfStock) {
            backgroundColor = 'rgba(236, 239, 241, 0.4)'
          } else if (isChosen) {
            backgroundColor = '#263238'
          } else {
            backgroundColor = '#FFF'
          }

          return (
            <TouchableOpacity key={item.id} style={{
              width: 72,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 4,
              backgroundColor: backgroundColor,
              borderWidth: outOfStock ? 0 : 1,
              borderColor: '#90A4AE',
              marginRight: 16,

            }}
              disabled={outOfStock}
              onPress={
                () => setIndexSize(index)
              }
            >
              <Text style={{
                fontSize: 14,
                color: isChosen ? '#FFF' : '#455A64',
                opacity: outOfStock ? 0.32 : 1
              }}>{item.name}</Text>
            </TouchableOpacity>
          )
        })
      }
    </View>
  )
}

export default OptionKits;
