import React, { Suspense } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './NavigationTypes';
import { SCREEN_NAMES } from './ScreenNames';
import { screenWrappers } from './ScreensRegistry';
import Loading from '@presentation/components/Loading';

// ------------------ - Create the stack navigator ------------------ //
const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

// ------------------ - Stack Navigator ------------------ //
const StackNavigator = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Navigator initialRouteName={SCREEN_NAMES.HOME}>
        <Screen
          name={SCREEN_NAMES.HOME}
          options={{ headerShown: false }}
          component={screenWrappers.Home}
        />

        <Screen name={SCREEN_NAMES.PROFILE} component={screenWrappers.Profile} />
      </Navigator>
    </Suspense>
  );
};

export { StackNavigator };
export type { RootStackParamList };
