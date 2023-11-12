import { StackNavigationProp } from '@react-navigation/stack';
import { ICoffeeCard } from '../components/CoffeeCard';

export type TStackParamList = {
  Home: undefined;
  Product: { item: ICoffeeCard };
};

export type TScreenNavigationProp = StackNavigationProp<TStackParamList, Home, Product>;

export type TabParamList = {
  home: undefined;
  favourite: undefined;
  cart: undefined;
};

export type TScreens = 'Home' | 'Product';