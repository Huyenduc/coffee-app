import { View, Text, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { dimensions } from '../constants/dimensions';
import { BellIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { categories } from '../constants';

export interface Props {
  id: number,
  title: string,
  activeCategory: number,
  setCategory: (id: number) => void
}

 const CategoriesItem = (item:Props) => {
 const {id, title, activeCategory , setCategory} = item;
  console.log(activeCategory);
 
  return (
    <TouchableOpacity
      onPress={()=>setCategory(id)}
      className='p-4 px-5 rounded-full mr-2 shadow'
      style={{ backgroundColor:activeCategory === id ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}>
      <Text
        className='font-semibold'
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoriesItem;