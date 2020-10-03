import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import ProductDeatil from './src/screens/ProductDeatil';
import ProductSearch from './src/screens/ProductSearch';
import Cart from './src/screens/Cart';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'ProductSearch'}>
          <Stack.Screen
            name="ProductSearch"
            component={ProductSearch}
            options={({ route, navigation }) => ({
              title: 'FIFA World Cup',
              headerStyle: {
                elevation: 0,
                shadowOpacity: 0,
              },
              headerTitleStyle: {
                fontSize: 16,
                color: '#263238',
                fontWeight: 'bold',
              },
              // cardShadowEnabled: false,
              headerShown: true,
              headerTitleAlign: 'center',
              headerLeft: () => <TouchableOpacity
                style={{ flexDirection: 'row' }}
              >
                <Image
                  source={require('./src/assets/Icon1.png')}
                  style={{
                    width: 24,
                    height: 24,
                    marginLeft: 14
                  }}
                />
              </TouchableOpacity>,

            })}
          />

          <Stack.Screen name="ProductDeatil" component={ProductDeatil} options={{
            title: '',
            // headerTitleAlign: 'center',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            // headerTitle: 'back',
            headerRight: () => <TouchableOpacity
              style={{ flexDirection: 'row' }}
            >
              <Image
                source={require('./src/assets/Icon2.png')}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 14
                }}
              />
            </TouchableOpacity>,
            // headerBackTitle: 'Back' // Ios
          }} />
          <Stack.Screen name="Cart" component={Cart} options={{
            title: '',
            // headerTitleAlign: 'center',
            headerStyle: {
              elevation: 0,
              shadowOpacity: 0,
            },
            // headerTitle: 'back',
            headerRight: () => <TouchableOpacity
              style={{ flexDirection: 'row' }}
            >
              <Image
                source={require('./src/assets/Icon2.png')}
                style={{
                  width: 24,
                  height: 24,
                  marginRight: 14
                }}
              />
            </TouchableOpacity>,
            // headerBackTitle: 'Back' // Ios
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

