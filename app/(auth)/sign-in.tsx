import logo from '@/assets/images/logo.png'
import CustomButton from '@/components/CustomButton'
import FormField from '@/components/FormField'
import Socialmedia from '@/components/Socialmedia'
import Checkbox from 'expo-checkbox'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = () => {
    // handle login here
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
            <View className="w-full items-center justify-center h-full px-4 my-6">
              {/* Logo */}
              <Image
                source={logo}
                resizeMode="contain"
                className="w-[130px] h-[84px]"
              />

              {/* Welcome text */}
              <Text className="text-3xl leading-[30px] text-secondary font-bold font-geist-bold mt-5">
                Welcome Back
              </Text>
              <Text className="text-[20px] leading[22px] text-secondary mt-3 font-geist-regular">
                Enter your login details
              </Text>

              {/* Input fields */}
              <View className="w-full mt-28 space-y-5">
                <FormField
                  title="Email"
                  value={form.email}
                  handleChangeText={(e: any) =>
                    setForm({ ...form, email: e })
                  }
                  otherStyles="mt-7"
                  keyboardType="email-address"
                  inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
                  placeholder="example@gmail.com"
                />

                <FormField
                  title="Password"
                  value={form.password}
                  handleChangeText={(e: any) =>
                    setForm({ ...form, password: e })
                  }
                  otherStyles="mt-7"
                  inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
                  placeholder=""
                  secureTextEntry
                />

                {/* Remember me + Forgot password */}
                <View className="flex-row items-center justify-between mt-2">
                  <View className="flex-row items-center mt-5">
                    <Checkbox
                      color={rememberMe ? '#2A7221' : ''}
                      value={rememberMe}
                      onValueChange={setRememberMe}
                    />
                    <Text className="text-secondary font-geist-regular ml-3">
                      Remember Me
                    </Text>
                  </View>
                  <Text className="text-green-light">
                    <Link href="/forgetPassword">Forgot Password?</Link>
                  </Text>
                </View>

                {/* Login button */}
                <CustomButton
                  title="Login"
                  handlePress={handleLogin}
                  containerStyles="bg-green mt-5 w-full"
                  isLoading={isSubmitting}
                />
              </View>

              {/* Divider */}
              <View className="flex-row items-center my-2">
                <View className="h-2 bg-[#E5E5E5] w-[101px]" />
                <Text className="mx-2 text-gray-500 text-sm">OR</Text>
                <View className="h-2 bg-[#E5E5E5] w-[101px]" />
              </View>

              {/* Social login */}
              <Socialmedia />

              {/* Create account */}
              <Text className="text-secondary mt-5 text-xl">
                Don't have an account?{' '}
                <Link
                  href="/sign-up"
                  className="text-green-light font-geist-bold"
                >
                  Create
                </Link>
              </Text>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignIn
