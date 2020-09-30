import React, { useState, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  title: string;
  onPress?: () => void;
}

const NextItem = ({ title = "xxxx", ...props }: Props) => {
  return (
    <TouchableOpacity style={{
      flexDirection: 'row', height: 48,
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 12,
      justifyContent: 'space-between'
    }}
      onPress={props.onPress}
    >
      <Text style={{
        fontWeight: 'bold',
        fontSize: 16,
        color: '#2C393F'
      }}>{title}</Text>
      <Image source={require('../../../assets/ic_down.png')} />
    </TouchableOpacity>
  )

};

const Customize = () => {
  const [show, setShow] = useState(false);
  const onPress = useCallback(() => {
    setShow(!show);
  }, [show])
  return <View>
    <NextItem title={'Customize Your Jersey'} onPress={onPress} />
    {
      show ? <Text>Customize Your Jersey</Text> : null
    }
  </View>
}
const InfoProduct = () => {
  return <NextItem title={'Product Details'} />
}
const Shipping = () => {
  return <NextItem title={'Shipping & Returns'} />
}

export default NextItem;

export {
  Customize,
  InfoProduct,
  Shipping
}
