import { View, Text, Platform } from 'react-native'
import React from 'react'
import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/homeScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themeColors } from '../theme';
import { HomeIcon as HomeOutline, HeartIcon as HeartOutline, ShoppingBagIcon as BagOutline } from 'react-native-heroicons/outline';
import { HomeIcon as HomeSolid, HeartIcon as HeartSolid, ShoppingBagIcon as BagSolid } from 'react-native-heroicons/solid';
import ProductScreen from '../screens/productScreen';
import { TStackParamList, TabParamList } from './type';
import { dimensions } from '../constants/dimensions';



const Stack = createNativeStackNavigator<TStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: 'white' }
        }}>
        <Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: themeColors.bgLight,
          marginBottom: 20,
          borderRadius: 50,
          marginHorizontal: 20,
          height: dimensions.height80,
        },
        tabBarIconStyle: { marginTop: Platform.OS === 'ios' ? 30 : 0 },
        tabBarIcon: ({ focused, color, size }) => menuIcons(route, focused)
      })}
    >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="favourite" component={HomeScreen} />
      <Tab.Screen name="cart" component={HomeScreen} />
    </Tab.Navigator>
  )
}

function menuIcons(route: RouteProp<ParamListBase, string>, focused: boolean): React.ReactElement {
  let icon: React.ReactElement = <View />;
  switch (route.name) {
    case 'home':
      icon = focused ? <HomeSolid size="30" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
      break;
    case 'favourite':
      icon = focused ? <HeartSolid size="30" color={themeColors.bgLight} /> : <HeartOutline size="30" strokeWidth={2} color="white" />
      break;
    case 'cart':
      icon = focused ? <BagSolid size="30" color={themeColors.bgLight} /> : <BagOutline size="30" strokeWidth={2} color="white" />
      break;
  }

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
    </View>
  )
}