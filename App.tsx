import React from 'react';
import { StackNavigator } from '@app/navigation/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';

// ------------ Main App Component ------------ //
const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
