import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar, View, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;

const App: React.FC = () => (
  <NavigationContainer>
    <View style={{ height: STATUSBAR_HEIGHT, backgroundColor: '#5636D3' }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#5636D3"
        translucent
      />
    </View>
    <Routes />
  </NavigationContainer>
);

export default App;
