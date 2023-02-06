import {View, ActivityIndicator, Text, ScrollView} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {useTailwind} from 'tailwind-rn/dist'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {
  CompositeNavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../navigator/RootNavigator'
import {TabStackParamList} from '../navigator/TabNavigator'
import useOrders from '../../hooks/useOrders'
import {Button, Image} from '@rneui/themed'
import OrderCard from '../../components/OrderCard'
import DeliveryCard from '../../components/DeliveryCard'

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>

const OrderScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  const {loading, error, orders} = useOrders()
  const {
    params: {order},
  } = useRoute<OrderScreenRouteProp>()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: order.trackingItems.customer.name,
      headerTintColor: '#eb6a7c',
      headerTitleStyle: {color: 'black'},
      headerBackTitle: 'Deliveries',
    })
  }, [navigation, order])

  return (
    <View style={tw('-mt-2')}>
      <DeliveryCard order={order} fullWidth />
    </View>
  )
}

export default OrderScreen
