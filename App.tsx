import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {TailwindProvider} from 'tailwind-rn'
import RootNavigator from './src/navigator/RootNavigator'
import utilities from './tailwind.json'

function App(): JSX.Element {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <SafeAreaProvider>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </TailwindProvider>
  )
}

export default App
