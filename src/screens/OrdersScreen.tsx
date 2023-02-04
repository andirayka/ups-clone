import {View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn/dist'

const OrdersScreen = () => {
  const tw = useTailwind()

  return (
    <SafeAreaView>
      <Text>OrdersScreen</Text>
    </SafeAreaView>
  )
}

export default OrdersScreen
