import { View, Text } from 'react-native'
import React from 'react'

export default function DummyScreen({ route, navigation }) {
   
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  )
}