import { View, Text, StatusBar, Image, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React,{useCallback} from 'react'
import { dimensions } from '../constants/dimensions';
import { BellIcon, MagnifyingGlassIcon, MapPinIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { categories } from '../constants';
import CategoriesItem, { Props } from '../components/CategoriesItem';


//  const CategoriesItem = (item: Props) => {
//   const [activeCategory, setActiveCategory] = React.useState<number>(1);
//   const setCategory = (id: string) => {
    
//   }
//   return (
//     <TouchableOpacity
//       onPress={()=>setCategory(item.id)}
//       className='p-4 px-5 rounded-full mr-2 shadow'
//       style={{ backgroundColor: 'rgba(0,0,0,0.07)' }}>
//       <Text
//         className='font-semibold'
//       >{item.title}</Text>
//     </TouchableOpacity>
//   )
// }


const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = React.useState<number>(1);
  const setCategory = useCallback( (id: number) => {
    setActiveCategory(id);
  },[])
  return (
    <View className='flex-1 relative bg-white'>
      <StatusBar />
      <Image source={require('../assets/images/beansBackground1.png')}
        className='w-full absolute -top-5 opacity-10'
        style={{ height: dimensions.height220 }}
      />
      <SafeAreaView className='flex-1'>
        <View className='px-4 flex-row justify-between items-center'>
          <Image source={require('../assets/images/avatar.png')} className='w-9 h-9 rounded-full' />
          <View className='flex-row items-center space-x-2'>
            <MapPinIcon size="25" color={themeColors.bgLight} />
            <Text className='text-base font-semibold'>Vinh, NYC</Text>
          </View>
          <BellIcon size="27" color="black" />
        </View>

        {/* Search bar*/}

        <View className='mx-5 mt-14'>
          <View className='flex-row justify-center items-center rounded-full p-1 bg-[#e6e6e6]'>
            <TextInput placeholder='Search' className='p-4 flex-1 font-semibold text-gray-700' />
            <TouchableOpacity className='rounded-full p-2'
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
            keyExtractor={(item:any) => item.id}
            className='overflow-visible'
            renderItem={({ item }) => <CategoriesItem id={item.id} title={item.title} activeCategory={activeCategory} setCategory={setCategory} />}

          />
        </View>
      </SafeAreaView>
    </View>
  )
}

export default HomeScreen;