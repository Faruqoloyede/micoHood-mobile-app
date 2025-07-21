import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '@/assets/images/logo.png'


const SignUp = () => {
  return (
    <SafeAreaView className='bg-white h-full'>
        <ScrollView contentContainerStyle={{height: '100%'}}>
            <View className='w-full justify-center items-center h-full px-4'>
                <Image source={logo} className='w-[130px] h-[84px]' resizeMode='contain' />
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp