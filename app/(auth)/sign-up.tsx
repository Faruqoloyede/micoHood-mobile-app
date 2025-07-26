import { View, Text, ScrollView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '@/assets/images/logo.png';
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import PasswordRule from '@/components/PasswordRule';
import Socialmedia from '@/components/Socialmedia';
import { Link } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const islengthValid = form.password.length >= 8;
  const hasSpecialChar = /[^A-Za-z0-9]/.test(form.password);
  const hasUppercase = /[A-Z]/.test(form.password);
  const hasLowercase = /[a-z]/.test(form.password);

  const passwordsMatch = form.password === form.confirmPassword;
  const allValid = islengthValid && hasSpecialChar && hasUppercase && hasLowercase && passwordsMatch;

  const handleSignup = ()=>{
    if(!allValid){
      alert("Please ensure all fields are valid before submitting.");
    }
  }

  return (
    <SafeAreaView className="bg-white h-full">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
          <View className="w-full justify-center items-center h-full px-4">
            <Image source={logo} className="w-[130px] h-[84px]" resizeMode="contain" />
            <Text className="text-3xl leading-[30px] text-secondary font-bold font-geist-bold mt-5">
              Create Account
            </Text>

            <View className="w-full mt-12 space-y-5">
              <FormField
                title="Full Name"
                value={form.fullname}
                handleChangeText={(e: any) => setForm({ ...form, fullname: e })}
                placeholder="John Doe"
                otherStyles="mt-7"
                keyboardType="default"
                inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
              />

              <FormField
                title="Email Address"
                value={form.email}
                handleChangeText={(e: any) => setForm({ ...form, email: e })}
                placeholder="example@gmail.com"
                keyboardType="email-address"
                inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
              />

              <FormField
                title="Phone Number"
                value={form.phone}
                handleChangeText={(e: any) => setForm({ ...form, phone: e })}
                placeholder="08123456789"
                keyboardType="phone-pad"
                inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
              />

              <FormField
                title="Password"
                value={form.password}
                handleChangeText={(e: any) => setForm({ ...form, password: e })}
                placeholder="Enter your password"
                secureTextEntry
                inputStyle="rounded-[10px] border-2 border-[#B0B0B0]"
              />

              <View className="my-3">
                <Text className="text-sm text-[#1B1B1B] font-geist-regular mb-1">
                  Your password must contain at least:
                </Text>
                <PasswordRule valid={islengthValid} label="8 characters" />
                <PasswordRule valid={hasSpecialChar} label="1 special character" />
                <PasswordRule valid={hasUppercase} label="1 uppercase letter" />
                <PasswordRule valid={hasLowercase} label="1 lowercase letter" />
              </View>
              <FormField
                title="Confirm Password"
                value={form.confirmPassword}
                handleChangeText={(e: any) => setForm({ ...form, confirmPassword: e })}
                placeholder="Re-enter your password"
                secureTextEntry
                inputStyle={`rounded-[10px] border-2 ${passwordsMatch || form.confirmPassword === '' ? 'border-[#B0B0B0]' : 'border-red-500'
                }`}
              />
               <View className='mt-3'>
                 {!passwordsMatch && form.confirmPassword.length > 0 && (
                  <Text className="text-red-500 text-xs ml-1 -mt-3">Passwords do not match</Text>
                )}
               </View>

              <CustomButton
                title="Create Account"
                handlePress={handleSignup}
                containerStyles="bg-green mt-3 w-full"
              />
            </View>
                 <View className="flex-row items-center my-3">
            <View className='h-2 bg-[#E5E5E5] w-[101px]' />
            <Text className="mx-2 text-gray-500 text-sm">OR</Text>
            <View className='h-2 bg-[#E5E5E5] w-[101px]' />
          </View>
            <Socialmedia />
          <Text className='text-secondary mt-5 text-xl'>Already have  an account? <Link href='/sign-in' className='text-green-light font-geist-bold mb-5'>Login</Link></Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
