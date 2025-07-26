import { View, Text } from 'react-native'
import React from 'react'
import {CircleCheck} from 'lucide-react-native'

type PasswordRuleProps ={
    valid: boolean;
    label: string
}
const PasswordRule = ({valid, label}: PasswordRuleProps) => {
  return (
    <View className='flex-row items-center mb-1'>
      {valid ? (
        <CircleCheck size={16} color="#205619" />
      ) : (
        <CircleCheck size={16} color="gray" />
      )}
      <Text className="text-sm text-gray-700 ml-1">{label}</Text>
    </View>
  )
}

export default PasswordRule

