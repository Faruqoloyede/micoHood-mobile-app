import { Text, Pressable } from 'react-native'
import React from 'react'

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
};
const CustomButton = ({title, handlePress, containerStyles}: CustomButtonProps) => {
  return (
    <Pressable onLongPress={handlePress} className={`justify-center items-center rounded-[16px] py-4 px-12 ${containerStyles}`} onPress={handlePress}>
        <Text className='text-white font-geist-medium text-[16px]'>{title}</Text>
    </Pressable>
  )
}

export default CustomButton