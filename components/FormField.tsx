import { View, Text, TextInput, TextInputProps } from 'react-native';
import React, { useState } from 'react';

type PropsType = {
  title: string;
  value: string;
  placeholder: string;
  inputStyle?: string;
  handleChangeText: (text: string) => void;
  otherStyles?: string;
} & TextInputProps;

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  inputStyle,
  ...props
}: PropsType) => {
    const [showPassword, setshowPassword] = useState(false)
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-secondary font-geist-medium">{title}</Text>
      <View className={`${inputStyle} 'border-2 mt-3 w-full h-16 px-4 rounded-2xl items-start`}>
        <TextInput className='flex-1 text-secondary font-geist-bold text-base'
            value={value}
            placeholder={placeholder}
            placeholderTextColor={'#B0B0B0'}
            onChangeText={handleChangeText}
            secureTextEntry={title === 'Password' && !showPassword}
        />
      </View>
    </View>
  );
};

export default FormField;
