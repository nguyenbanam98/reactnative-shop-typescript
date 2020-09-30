import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  onPressList: () => void; //ham check ....
  onPressGridList: () => void;
  showGrid: boolean
}

const Control = (props: Props) => {

  return (
    <View style={styles.container}>
      <View style={styles.contentButton}>
        <TouchableOpacity onPress={props.onPressList}>
          <Image
            source={require('../../../assets/list.png')}
            style={[styles.imgList, {
              tintColor: !props.showGrid ? 'black' : 'rgb(153, 153, 153)',
            }]}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={props.onPressGridList}>
          <Image
            source={require('../../../assets/grid.png')}
            style={[styles.imgGrid, {
              tintColor: props.showGrid ? 'black' : 'rgb(153, 153, 153)'
            }]}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentButtonText}>
        <Text style={styles.txtFilter}>Filter</Text>
        <Text style={styles.txtSort}>Sort</Text>
      </View>
    </View>
  )
}

export default Control;

const styles = StyleSheet.create({
  container: {
    height: 48,
    marginHorizontal: 16,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  contentButton: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imgList: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  imgGrid: {
    width: 24,
    height: 24,
    marginRight: 12
  },
  contentButtonText: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  txtFilter: {
    fontSize: 16,
    color: '#78909C',
    fontWeight: 'bold',
    marginRight: 25
  },
  txtSort: {
    fontSize: 16,
    color: '#78909C',
    fontWeight: 'bold',
  }
})
