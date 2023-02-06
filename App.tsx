import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {TailwindProvider} from 'tailwind-rn'
import RootNavigator from './src/navigator/RootNavigator'
import utilities from './tailwind.json'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5001/api/flippant-gnat',
  cache: new InMemoryCache(),
})

function App(): JSX.Element {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <ApolloProvider client={client}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </ApolloProvider>
    </TailwindProvider>
  )
}

export default App
