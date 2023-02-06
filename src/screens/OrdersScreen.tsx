import {View, ActivityIndicator, Text, ScrollView} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {useTailwind} from 'tailwind-rn/dist'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {CompositeNavigationProp, useNavigation} from '@react-navigation/native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../navigator/RootNavigator'
import {TabStackParamList} from '../navigator/TabNavigator'
import useOrders from '../../hooks/useOrders'
import {Button, Image} from '@rneui/themed'
import OrderCard from '../../components/OrderCard'

export type OrdersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Orders'>,
  NativeStackNavigationProp<RootStackParamList>
>

const OrdersScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<OrdersScreenNavigationProp>()
  const {loading, error, orders} = useOrders()
  const [ascending, setAscending] = useState(false)

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
      // eslint-disable-next-line react/no-unstable-nested-components
      tabBarLabel: ({focused, color}) => (
        <Text style={{color: focused ? '#eb6a7c' : color, fontSize: 10}}>
          Orders
        </Text>
      ),
    })
  }, [navigation])

  return (
    <ScrollView style={{backgroundColor: '#eb6a7c'}}>
      <Image
        source={{uri: 'https://links.papareact.com/m51'}}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />

      <View>
        <Button
          color="pink"
          titleStyle={{color: 'gray', fontWeight: '400'}}
          style={tw('py-2 px-5')}
          onPress={() => setAscending(!ascending)}>
          {ascending ? 'Showing: Oldest First' : 'Showing: Most Recent First'}
        </Button>

        {orders
          ?.sort((a, b) => {
            if (ascending) {
              return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
            }
            return new Date(a.createdAt) < new Date(b.createdAt) ? 1 : -1
          })
          .map(order => (
            <OrderCard key={order.trackingId} item={order} />
          ))}
      </View>
    </ScrollView>
  )
}

export default OrdersScreen
