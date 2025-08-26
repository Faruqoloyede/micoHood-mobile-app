import verify_icon from '@/assets/icons/verify_icon.png'
import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import React, { useState } from 'react'
import { Image, Pressable, SafeAreaView, ScrollView, Text, View } from 'react-native'
import { OtpInput } from 'react-native-otp-entry'

const Verify = () => {
  const [otp, setOtp] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVerification = () => {
    setIsSubmitting(true)
    console.log("Entered OTP:", otp)
    
    setTimeout(() => {
      setIsSubmitting(false)
      router.push('/')
    }, 1500)
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        {/* Back Button */}
        <View className="absolute top-12 left-4 z-10">
          <Pressable onPress={() => router.back()}>
            <ArrowLeft size={28} color="#000" />
          </Pressable>
        </View>

        <View className="w-full items-center justify-center h-full px-4 my-12">
          
          <View className="bg-icon_bg w-[200px] h-[200px] items-center justify-center rounded-full">
            <Image source={verify_icon} resizeMode="contain" className="w-[80px] h-[80px]" />
          </View>
          <View className='flex items-start justify-between w-full mt-10'>
          <Text className="font-geist-bold text-[24px]">Verity your Details.</Text>
          <Text className="text-[16px] font-geist-regular text-secondary mt-3 text-center">
           Please enter the 4 Digit Codes sent to xxxxxxxx 
          </Text>
          </View>
          
          <View className="my-10 w-full items-center">
            <OtpInput
              numberOfDigits={4}
              focusColor="green"
              focusStickBlinkingDuration={400}
              onTextChange={(text) => setOtp(text)}
              onFilled={(text) => console.log("OTP Filled:", text)}
              theme={{
                containerStyle: { gap: 12 },
                pinCodeContainerStyle: {
                  borderRadius: 10,
                  borderWidth: 2,
                  borderColor: '#B0B0B0',
                  width: 45,
                  height: 55,
                },
                pinCodeTextStyle: { fontSize: 20, fontWeight: '600' },
              }}
            />
          </View>

          <View className="my-6 w-full">
            <CustomButton
              title="Continue"
              handlePress={handleVerification}
              containerStyles="bg-green mt-5 w-full"
              isLoading={isSubmitting}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Verify
