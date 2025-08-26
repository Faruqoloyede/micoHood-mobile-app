import forget from '@/assets/icons/icon_forget.png'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import { router } from 'expo-router'
import { ArrowLeft } from 'lucide-react-native'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const ForgetPassword = () => {
  const [form, setForm] = useState({ email: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVerification = () => {
    if (!form.email) {
      return null
    } else {
      router.push('/verify')
    }
  }

  return (
    <SafeAreaView className="bg-primary h-full">
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            <View className="flex-1">
           
              <View className="absolute top-12 left-4 z-10">
                <Pressable onPress={() => router.back()}>
                  <ArrowLeft size={28} color="#000" />
                </Pressable>
              </View>

              <View className="flex-1 w-full items-center justify-center px-4 my-12">
              
                <View className="bg-icon_bg w-[200px] h-[200px] items-center justify-center rounded-full">
                  <Image
                    source={forget}
                    resizeMode="contain"
                    className="w-[80px] h-[80px]"
                  />
                </View>

                {/* Text & Input */}
                <View className="flex items-start justify-between mt-20 w-full">
                  <Text className="font-geist-bold text-[24px]">
                    Forgot Password?
                  </Text>
                  <Text className="text-[16px] font-geist-regular text-secondary mt-5 leading-relaxed">
                    It happens, enter your Phone number or Email and we will
                    send an OTP to reset your password.
                  </Text>

                  <FormField
                    value={form.email}
                    handleChangeText={(e: any) =>
                      setForm({ ...form, email: e })
                    }
                    otherStyles="mt-7"
                    keyboardType="email-address"
                    inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
                    placeholder="example@gmail.com"
                  />
                </View>

                {/* Button */}
                <View className="my-16 w-full">
                  <CustomButton
                    title="Continue"
                    handlePress={handleVerification}
                    containerStyles="bg-green mt-5 w-full"
                    isLoading={isSubmitting}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ForgetPassword
