import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import { COLORS } from '../../utils/constants/colors';
import Cart from '../../screens/cart';
import Orders from '../../screens/orders';

const Stack = createNativeStackNavigator();

const CartStackNavigation = () => {
    return (
        <Stack.Navigator
            initialRouteName='Cart'
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? COLORS.primary : '',
                },
                headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
                headerTitleStyle: {
                    fontWeight: 'bold'
                }
            }}
        >
            <Stack.Screen name="Cart" 
            component={Cart}
            options = {{ title: 'Carrito' }} />

            <Stack.Screen name="Orders" 
            component={Orders} 
            options = {{ title: 'Ordenes' }}
            />
        </Stack.Navigator>
    )
}

export default CartStackNavigation;