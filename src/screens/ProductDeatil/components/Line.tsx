import React from 'react'
import { View, StyleSheet } from 'react-native';

function Line() {
  return (
    <>
      <View style={styles.line}></View>
    </>
  )
}

const styles = StyleSheet.create({
  line: { backgroundColor: "#CACFD2", marginHorizontal: 10, marginTop: 10, height: 1 }
})


export default Line

