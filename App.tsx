import React from 'react';
import {View} from 'react-native';

import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

function App(): JSX.Element {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <View></View>;
    </TailwindProvider>
  );
}

export default App;
