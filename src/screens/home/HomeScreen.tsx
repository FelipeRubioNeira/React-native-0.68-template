import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ButtonApp } from '../../components/ButtonApp';
import { HomeScreenProps } from './HomeTypes';

// -------------- HomeScreen Component -------------- //

const HomeScreen = (viewModel: HomeScreenProps) => {
  // -------------- view model -------------- //
  const { counter, incrementCounter, navigateToProfile } = viewModel;

  // -------------- render -------------- //
  return (
    <View style={localStyles.screenContainer}>
      <Text>Contador: {counter}</Text>
      <ButtonApp title={'Incrementar contador'} onPress={incrementCounter} />
      <ButtonApp title={'Navegar a perfil'} onPress={navigateToProfile} />
    </View>
  );
};

const localStyles = StyleSheet.create({
  screenContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

// ------- Exported Component and Types ---------- //
export { HomeScreen };
