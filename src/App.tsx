import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{ flex: 1, backgroundColor: '#5636D3' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5636D3"
        translucent
      />
      <SafeAreaView />
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
