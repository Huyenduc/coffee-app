import { View, Text, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useCallback } from 'react'
import { dimensions } from '../constants/dimensions';
import { BellIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { categories, coffeeItems } from '../constants';
import CategoriesItem from '../components/CategoriesItem';
import Carousel from 'react-native-snap-carousel-v4';
import CoffeeCard from '../components/CoffeeCard';

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = React.useState<number>(1);
  const [activeCoffeeItem, setActiveCoffeeItem] = React.useState<number>(1);

  const setCategory = useCallback((id: number) => {
    console.log('setting category');
    setActiveCategory(id);
  }, []);

  return (
    <View className='flex-1 relative bg-white'>
      <StatusBar barStyle='dark-content' />
      <Image source={require('../assets/images/beansBackground1.png')}
        className='w-full absolute -top-5 opacity-10'
        style={{ height: dimensions.height220 }}
      />
      <SafeAreaView className='flex-1'>
        <View className='mt-2 px-4 flex-row justify-between items-center'>
          <Image source={require('../assets/images/avatar.png')} className='w-9 h-9 rounded-full' />
          <View className='flex-row items-center space-x-2'>
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className='text-base font-semibold'>Vinh, NYC {activeCoffeeItem}</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>

        {/* Search bar*/}

        <View className='mx-5 mt-14'>
          <View className='flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]'>
            <TextInput placeholder='Search' className='p-4 flex-1 font-semibold text-gray-700' />
            <TouchableOpacity onPress={() => setActiveCoffeeItem(2)} className='rounded-full p-2'
              style={{ backgroundColor: themeColors.bgLight }}
            >
              <MagnifyingGlassIcon size="25" strokeWidth={2} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}

        <View className='px-5 mt-6'>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id.toString()}
            className='overflow-visible'
            renderItem={({ item }) => <CategoriesItem item={item} activeCategory={activeCategory} setCategory={setCategory} />}

          />
        </View>

        {/* coffee card */}

        <View className='mt-16 py-2'>
          <Carousel
            containerCustomStyle={{ overflow: 'visible' }}
            data={coffeeItems}
            renderItem={({ item }: any) => <CoffeeCard item={item} />}
            firstItem={1}
            inactiveSlideOpacity={0.75}
            inactiveSlideScale={0.85}
            loop={true}
            sliderWidth={400}
            itemWidth={260}
            slideStyle={{ display: 'flex', alignItems: 'center' }}
          >
          </Carousel>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen;