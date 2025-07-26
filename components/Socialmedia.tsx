import { View, Pressable, Image } from 'react-native'
import React from 'react'

const Socialmedia = () => {
  return (
       <View className="flex-row justify-center">
              <Pressable className="bg-secondary p-3 rounded-full shadow-md mr-3">
                <Image source={require('@/assets/icons/google.png')} className="w-6 h-6" />
              </Pressable>
              <Pressable className="bg-secondary p-3 rounded-full shadow-md mr-3">
                <Image source={require('@/assets/icons/facebook.png')} className="w-6 h-6" />
              </Pressable>
              <Pressable className="bg-secondary p-3 rounded-full shadow-md mr-3">
                <Image source={require('@/assets/icons/apple.png')} className="w-6 h-6" />
              </Pressable>
            </View>
  )
}

export default Socialmedia