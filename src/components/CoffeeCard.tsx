import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { FC, memo } from 'react';
import { themeColors } from '../theme';
import { dimensions } from '../constants/dimensions';
import { PlusIcon, StarIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TScreenNavigationProp } from '../router/type';

export interface ICoffeeCard {
    id: number,
    name: string,
    price: string,
    volume: string,
    stars: string,
    image: HTMLImageElement,
    desc: string
}

type ProductParamList = {
    Product: { item: ICoffeeCard };
};

export interface ICoffeeCardProps {
    item: ICoffeeCard
}

const CoffeeCard: FC<ICoffeeCardProps> = ({ item }) => {

    const {
        id,
        name,
        price,
        volume,
        stars,
        image,
        desc
    } = item;
    console.log('item', item);

    // const navigation = useNavigation();
    const navigation = useNavigation<TScreenNavigationProp>();
    return (
        <View
            style={{
                borderRadius: 40,
                backgroundColor: themeColors.bgDark,
                height: dimensions.heihgt350,
                width: dimensions.widtht250
            }}>
            <View
                style={{
                    shadowColor: 'black',
                    shadowRadius: 30,
                    shadowOpacity: 0.8,
                    shadowOffset: { width: 0, height: 40 },
                }}
                className='flex-row justify-center -mt-14'
            >
                <Image source={image} className='h-40 w-40' />

            </View>
            <View className='px-5 mt-5 space-y-3'>
                <Text className='text-3xl text-white font-semibold z-10'>{name}</Text>
                <View style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
                    className='flex-row items-center rounded-3xl px-1 space-x-1 w-16'
                >
                    <StarIcon size='15' color='white' />
                    <Text className='text-base font-semibold text-white' >{stars}</Text>
                </View>

                <View className='flex-row space-x-1 z-10 mb-6'>
                    <Text className='text-base text-white font-semibold opacity-60'>volume</Text>
                    <Text className='text-base font-semibold text-white'>{volume}</Text>
                </View>

                <View
                    style={{
                        backgroundColor: themeColors.bgDark,
                        shadowColor: themeColors.bgDark,
                        shadowRadius: 25,
                        shadowOpacity: 0.8,
                        shadowOffset: { width: 0, height: 40 },
                    }}
                    className='flex-row justify-between items-center'
                >
                    <Text className='text-white font-bold text-lg'>{price}</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Product', { item: { ...item } })}
                        style={{
                            shadowColor: 'black',
                            shadowRadius: 40,
                            shadowOpacity: 0.8,
                            shadowOffset: { width: -20, height: -10 },
                        }}
                        className='p-4 bg-white rounded-full'
                    >
                        <PlusIcon size='25' strokeWidth={2} color={themeColors.bgDark} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default memo(CoffeeCard);