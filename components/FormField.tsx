import { View, Text, TextInput, TextInputProps, Pressable } from 'react-native';
import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react-native'; // Make sure to install lucide-react-native

type PropsType = {
  title: string;
  value: string;
  placeholder?: string;
  inputStyle?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
  secureTextEntry?: boolean; // allow secureTextEntry from parent
} & TextInputProps;

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  inputStyle,
  secureTextEntry = false,
  ...props
}: PropsType) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPasswordType = secureTextEntry;

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-secondary font-geist-medium">{title}</Text>
      <View className={`${inputStyle} border-2 mt-3 w-full h-16 px-4 rounded-2xl flex-row items-center justify-between`}>
        <TextInput
          className="flex-1 text-secondary font-geist-bold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor={'#B0B0B0'}
          onChangeText={handleChangeText}
          secureTextEntry={isPasswordType && !showPassword}
          {...props}
        />
        {isPasswordType && (
          <Pressable onPress={() => setShowPassword((prev) => !prev)}>
            {showPassword ? <EyeOff size={20} color="#B0B0B0" /> : <Eye size={20} color="#B0B0B0" />}
          </Pressable>
        )}
      </View>
    </View>
  );
};

export default FormField;
