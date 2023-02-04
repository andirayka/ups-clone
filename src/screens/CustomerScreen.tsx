import React, {useLayoutEffect} from 'react'
import {useTailwind} from 'tailwind-rn/dist'
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native'
import {ActivityIndicator, ScrollView, Text} from 'react-native'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {TabStackParamList} from '../navigator/TabNavigator'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../navigator/RootNavigator'
import {Image} from '@rneui/themed'

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>

const CustomerScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<CustomersScreenNavigationProp>()

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false})
  }, [navigation])

  return (
    <ScrollView>
      <Image
        source={{uri: 'https://links.papareact.com/3jc'}}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
    </ScrollView>
  )
}

export default CustomerScreen
