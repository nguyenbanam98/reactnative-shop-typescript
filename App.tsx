import 'react-native-gesture-handler';
import React from 'react';
import ProductDeatil from './src/screens/ProductDeatil';
import ProductSearch from './src/screens/ProductSearch';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="ProductSearch" component={ProductSearch} options={{
            title: 'My home',
            headerShown: false
          }} />
          <Stack.Screen name="ProductDeatil" component={ProductDeatil} options={{
            title: 'Detail',
            headerShown: false
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

