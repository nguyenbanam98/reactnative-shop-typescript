import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

function Search() {
  return (
    <>
      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={27} color="#868793" style={styles.iconSearch} />
        <TextInput placeholder="Tim Kiem" style={{ width: '100%', height: '100%' }} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    height: 40,
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#868793",
    marginHorizontal: 10

  },
  iconSearch: {
    marginLeft: 10
  }
});
export default Search;