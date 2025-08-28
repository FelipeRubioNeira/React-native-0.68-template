import { Text, View } from 'react-native';
import React from 'react';
import { ProfileScreenProps } from './ProfileTypes';

const ProfileScreen = (viewModel: ProfileScreenProps) => {
  const { data } = viewModel;

  return (
    <View>
      <Text>Nos ha llegado: {data.counter} </Text>
      <Text>El valor almacenado en Store es: {data.counter} </Text>
    </View>
  );
};

export { ProfileScreen };
