import { Text, TouchableOpacity } from 'react-native'
import React, { FC, memo } from 'react'
import { themeColors } from '../theme';

export interface IProps {
  item: { id: number, title: string }
  activeCategory: number,
  setCategory: (id: number) => void
}

const CategoriesItem: FC<IProps> = ({ item, activeCategory, setCategory }) => {
  const {
    id,
    title
  } = item;
  console.log('rendering categories item');
  const isActiveCategory = activeCategory === id;

  return (
    <TouchableOpacity
      onPress={() => setCategory(id)}
      className='p-4 px-5 rounded-full mr-2 shadow min-w-0'
      style={{ backgroundColor: isActiveCategory ? themeColors.bgLight : 'rgba(0,0,0,0.07)' }}>
      <Text
        className={'font-semibold ' + (isActiveCategory ? 'text-white' : 'text-gray-700')}
      >{title}</Text>
    </TouchableOpacity>
  )
}

export default memo(CategoriesItem);