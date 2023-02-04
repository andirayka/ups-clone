import {NavigationContainer} from '@react-navigation/native'
import React from 'react'

import {TailwindProvider} from 'tailwind-rn'
import CustomerScreen from './src/screens/CustomerScreen'
import utilities from './tailwind.json'

function App(): JSX.Element {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <CustomerScreen />
      </NavigationContainer>
    </TailwindProvider>
  )
}

export default App
