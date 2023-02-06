import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn/dist'
import {useNavigation} from '@react-navigation/native'
import {CustomersScreenNavigationProp} from '../src/screens/CustomerScreen'
import {Card, Divider, Icon} from '@rneui/themed'
import useOrders from '../hooks/useOrders'

type Props = {
  order: Order
}
const DeliveryCard = ({order}: Props) => {
  const {error, loading, orders} = useOrders()
  const tw = useTailwind()
  const navigation = useNavigation<CustomersScreenNavigationProp>()

  return (
    <Card
      containerStyle={[
        tw('rounded-lg my-2'),
        {
          backgroundColor: '#59c1cc',
          padding: 0,
          paddingTop: 16,
          shadowColor: 'black',
          shadowOffset: 'black',
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}>
      <View>
        <Icon name="box" type="entypo" size={50} color="white" />

        <View>
          <Text
            style={tw('text-xs text-center uppercase text-white font-bold')}>
            {order.carrier} - {order.trackingId}
          </Text>
          <Text style={tw('text-white text-center text-lg font-bold')}>
            Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}
          </Text>

          <Divider color="white" />
        </View>

        <View style={tw('mx-auto')}>
          <Text style={tw('text-base text-center text-white font-bold my-5')}>
            Address
          </Text>
          <Text style={tw('text-base text-center text-white')}>
            {order.Address}, {order.City}
          </Text>
          <Text style={tw('text-base text-center text-white italic')}>
            Shipping Cost: Rp {order.shippingCost}
          </Text>
        </View>

        <Divider color="white" />

        <View style={tw('p-5')}>
          {order.trackingItems.items.map(item => (
            <View style={tw('flex-row justify-between item-center')}>
              <Text style={tw('text-sm italic text-white')}>{item.name}</Text>
              <Text style={tw('text-xl text-white')}>x {item.quantity}</Text>
            </View>
          ))}
        </View>
      </View>
    </Card>
  )
}

export default DeliveryCard
