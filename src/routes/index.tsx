import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';

const Router = createStackNavigator();

const Routes: React.FC = () => (
  <Router.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Router.Screen name="Dashboard" component={Dashboard} />
    <Router.Screen name="Register" component={Register} />
  </Router.Navigator>
);

export default Routes;
