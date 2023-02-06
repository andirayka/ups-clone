import {useEffect, useState} from 'react'
import {useQuery} from '@apollo/client'
import {GET_ORDERS} from '../graphql/queries'

const useCustomerOrders = (userId: string) => {
  const {loading, error, data} = useQuery(GET_ORDERS)
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    if (!data) return

    const ordersData: Order[] = data.getOrders.map(
      ({value}: OrderResponse) => ({
        carrier: value.carrier,
        createdAt: value.createdAt,
        shippingCost: value.shippingCost,
        trackingId: value.trackingId,
        trackingItems: value.trackingItems,
        Lat: value.Lat,
        Lng: value.Lng,
        Address: value.Address,
        City: value.City,
      }),
    )

    // console.log(ordersData[0].trackingItems)
    const customerOrders = ordersData.filter(
      order => order.trackingItems.customerid === userId,
    )

    setOrders(customerOrders)
  }, [data, userId])

  return {loading, error, orders}
}

export default useCustomerOrders
