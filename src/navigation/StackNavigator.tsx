import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from './ScreenNames';
import { RootStackParamList } from './NavigationTypes';
import { HomeScreen, ProfileScreen, useHomeViewModel, useProfileViewModel } from '../screens';
import { GetUserUseCase } from '../useCases/GetUserUseCase';
import { container } from '../di/DiContainer';
import { withViewModel } from './FactoryScreen';

// ------------------ resolve depencencies ------------------ //
const getUserUseCase = container.resolve<GetUserUseCase>(GetUserUseCase.name);

// ------------------ Create screen wrappers ------------------ //

const HomeScreenWrapper = withViewModel(HomeScreen, useHomeViewModel, {
  getUserUseCase,
});

const ProfileScreenWrapper = withViewModel(ProfileScreen, useProfileViewModel);

// Create the stack navigator
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

// ------------------ Stack Navigator ------------------ //
const StackNavigator = () => {
  return (
    <Navigator initialRouteName={SCREEN_NAMES.HOME}>
      <Screen
        name={SCREEN_NAMES.HOME}
        options={{ headerShown: false }}
        component={HomeScreenWrapper}
      />

      <Screen name={SCREEN_NAMES.PROFILE} component={ProfileScreenWrapper} />
    </Navigator>
  );
};

export { StackNavigator };
export type { RootStackParamList };
