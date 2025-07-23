import { Text, Pressable } from 'react-native'
import React from 'react'

type CustomButtonProps = {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  isLoading?: boolean;
};
const CustomButton = ({title, handlePress, containerStyles, isLoading, }: CustomButtonProps) => {
  return (
    <Pressable onLongPress={handlePress} className={`justify-center items-center rounded-[16px] py-4 px-12 ${containerStyles} ${isLoading ? 'opacity-50' : ""}`} onPress={handlePress} disabled={isLoading}>
        <Text className='text-white font-geist-medium text-[16px]'>{title}</Text>
    </Pressable>
  )
}

export default CustomButton