import {NavigationContainer} from '@react-navigation/native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import {TailwindProvider} from 'tailwind-rn'
import RootNavigator from './src/navigator/RootNavigator'
import utilities from './tailwind.json'
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

const client = new ApolloClient({
  // uri: 'http://localhost:5001/api/flippant-gnat',
  uri: 'https://panambi.stepzen.net/api/flippant-gnat/__graphql',
  headers: {
    Authorization:
      'apikey panambi::stepzen.io+1000::f6d906e57ba5f47767e710d4fadbd9561d77d6fa29153a22ae19e789d958e23f',
  },
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
