import React, { useState, useCallback } from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  style?: ViewStyle;
  callBackValue?: (qti: number) => void;
}


const OptionQuantity = (props: Props) => {
  const [number, setNumber] = useState(1);

  const onReduce = useCallback(() => {
    if (number === 1) return;
    props.callBackValue && props.callBackValue(number - 1);
    setNumber(number - 1)
  }, [number]);

  const onPlus = useCallback(() => {
    props.callBackValue && props.callBackValue(number + 1);
    setNumber(number + 1)
  }, [number]);


  return (
    <View style={[styles.container, props.style]}>
      <Text style={styles.txtTitle}>Qti</Text>
      <TouchableOpacity
        style={[styles.button, {
          backgroundColor: number === 1 ? 'rgba(236, 239, 241, 0.4)' : '#ECEFF1'
        }]}
        disabled={number === 1}
        onPress={onReduce}>
        <Image source={require('../../../assets/reduce.png')} />
      </TouchableOpacity>
      <Text style={styles.txtNum}>{number}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={onPlus}
      >
        <Image source={require('../../../assets/plus.png')} />
      </TouchableOpacity>
    </View>
  )
}

export default OptionQuantity;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 16,
    alignItems: 'center',
    marginVertical: 24,
    paddingLeft: 12,
    marginTop: 8
  },
  button: {
    width: 44,
    height: 40,
    backgroundColor: '#ECEFF1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2
  },
  txtNum: {
    fontSize: 22,
    color: '#2C393F',
    fontWeight: 'bold',
    marginHorizontal: 16
  },
  txtTitle: {
    fontSize: 16,
    color: '#263238',
    marginRight: 19,
    fontWeight: 'bold'
  }

})
