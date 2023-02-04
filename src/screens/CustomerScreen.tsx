import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn/dist'

const CustomerScreen = () => {
  const tw = useTailwind()

  return (
    <SafeAreaView>
      <Text>CustomerScreen</Text>
    </SafeAreaView>
  )
}

export default CustomerScreen
