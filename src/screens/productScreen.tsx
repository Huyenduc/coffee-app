import { View, SafeAreaView, Image, TouchableOpacity, Text } from 'react-native';
import React, { FC } from 'react';
import { dimensions } from '../constants/dimensions';
import { TScreens, TStackParamList } from '../router/type';
import { StackScreenProps } from '@react-navigation/stack';
import { ArrowLeftCircleIcon, ShoppingBagIcon } from 'react-native-heroicons/outline';
import { HeartIcon, MinusIcon, PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';

type Props = StackScreenProps<TStackParamList, TScreens>;


const ProductScreen: FC<Props> = ({ route, navigation }) => {
  const [isSize, setSize] = React.useState('Small');

  const item = route?.params?.item;
  const sizeItems = ['Small', 'Medium', 'Large'];
  return (
    <View className='flex-1'>
      <Image
        source={require('../assets/images/beansBackground2.png')}
        style={{
          height: dimensions.height270,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
        }}
        className='w-full absolute'
      />
      <SafeAreaView className='space-y-4'>
        <View className='mx-4 mt-1 flex-row justify-between items-center'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color='white' />
          </TouchableOpacity>
          <TouchableOpacity className='rounded-full border-2 border-white p-2'>
            <HeartIcon size={22} color='white' />
          </TouchableOpacity>
        </View>
        <View className='flex-row justify-center mt-50'
          style={{
            shadowColor: themeColors.bgDark,
            shadowRadius: 30,
            shadowOpacity: 0.9,
            shadowOffset: { width: 0, height: 30 },
            elevation: 3,
            zIndex: 999,
          }}
        >
          {item?.image && (
            <Image source={item?.image} className='h-56 w-56 mt-6' />
          )}
        </View>
        <View style={{ backgroundColor: themeColors.bgDark }}
          className='flex-row mx-4 items-center rounded-3xl px-1 space-x-1 w-16 opacity-90'
        >
          <StarIcon size='15' color='white' />
          <Text className='text-base font-semibold text-white' >{item?.stars}</Text>
        </View>
        <View className='flex-row justify-between mx-4'>
          <Text className='text-3xl font-semibold'
            style={{ color: themeColors.text }}>
            {item?.name}
          </Text>
          <Text className='text-lg font-semibold'
            style={{ color: themeColors.text }}
          >
            $ {item?.price}
          </Text>
        </View>
        <Text style={{ color: themeColors.text }} className='text-lg mx-4 font-semibold'>Coffee size</Text>
        <View className='flex-row justify-between mx-4'>
          {
            sizeItems.map((size, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSize(size)}
                style={{ backgroundColor: isSize === size ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}
                className='p-3 px-9  rounded-full'>
                <Text
                  className={isSize === size ? 'text-white' : 'text-gray-700'}>{size}
                </Text>
              </TouchableOpacity>
            ))
          }
        </View>
        <Text className='text-lg mx-4 font-semibold' style={{ color: themeColors.text }}>
          About
        </Text>
        <Text className='mx-4 text-gray-600'>
          {item?.desc}
        </Text>
        <View className='flex-row justify-between items-center mx-4'>
          <View className='flex-row '>
            <Text className='text-gray-600'>Volume</Text>
            <Text className='font-semibold'> {item?.volume}</Text>
          </View>
          <View className='flex-row space-x-4 items-center border-gray-500 border rounded-full p-1 px-4'>
            <TouchableOpacity>
              <MinusIcon size='20' strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
            <Text style={{ color: themeColors.text, fontWeight: '600' }}>1</Text>
            <TouchableOpacity>
              <PlusIcon size='20' strokeWidth={3} color={themeColors.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View className='flex-row justify-between items-center mx-4 mt-5'>
          <View className='rounded-full p-4 border border-gray-400'>
            <ShoppingBagIcon size='30' color='gray' />
          </View>
          <TouchableOpacity style={{ backgroundColor: themeColors.bgLight }} className='rounded-full flex-1 ml-3 p-4 '>
            <Text className='text-center text-base font-semibold text-white'>Buy now</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default ProductScreen