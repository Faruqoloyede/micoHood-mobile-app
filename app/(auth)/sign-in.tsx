import { View, Text, ScrollView, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import logo from '@/assets/images/logo.png'
import FormField from '@/components/FormField'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full items-center justify-center h-full px-4 my-6'>
          <Image source={logo} resizeMode='contain' className='w-[115px] h-[50px]'/>
          <Text className='text-3xl leading-[30px] text-secondary font-bold font-geist-bold mt-5'>Welcome Back</Text>
          <Text className='text-[20px] leading[22px] text-secondary mt-3 font-geist-regular'>Enter your login details</Text>
          <View className='w-full mt-36 space-y-5'>
             <FormField title="Email" value={form.email} handleChangeText={(e: any)=> setForm({...form, email: e})} otherStyles="mt-7" keyboardType="email-address" inputStyle="rounded-[10px] border-2 border-[#B0B0B0]" placeholder='example@gmail.com' />

          <FormField title="Password" value={form.password} handleChangeText={(e: any)=> setForm({...form, password: e})} otherStyles="mt-7" inputStyle="rounded-[10px] border-2 border-[#B0B0B0]" placeholder='' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn