import React, {useLayoutEffect, useState} from 'react'
import {useTailwind} from 'tailwind-rn/dist'
import {useNavigation, CompositeNavigationProp} from '@react-navigation/native'
import {ActivityIndicator, ScrollView, Text} from 'react-native'
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs'
import {TabStackParamList} from '../navigator/TabNavigator'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import {RootStackParamList} from '../navigator/RootNavigator'
import {Image, Input} from '@rneui/themed'

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, 'Customers'>,
  NativeStackNavigationProp<RootStackParamList>
>

const CustomerScreen = () => {
  const tw = useTailwind()
  const navigation = useNavigation<CustomersScreenNavigationProp>()
  const [input, setInput] = useState<string>('')

  useLayoutEffect(() => {
    navigation.setOptions({headerShown: false})
  }, [navigation])

  return (
    <ScrollView style={{backgroundColor: '#59c1cc'}}>
      <Image
        source={{uri: 'https://links.papareact.com/3jc'}}
        containerStyle={tw('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />

      <Input
        placeholder="Search by Customer"
        value={input}
        onChangeText={setInput}
        containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  )
}

export default CustomerScreen
