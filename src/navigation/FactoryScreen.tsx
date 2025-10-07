import React, { ComponentType } from 'react';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation, useRoute } from '@react-navigation/native';
import type { RouteProp } from '@react-navigation/native';
import type { ParamListBase } from '@react-navigation/native';
import { BaseViewModelProps } from './NavigationTypes';

/**
 *
 * @param ScreenComponent: The screen component to wrap
 * @param useViewModel: the viewModel asociated to each screen
 * @param deps: [Optional] Use cases that are received on the viewModel
 * @returns A wrapped screen component with the view model together all the use cases
 */
export function withViewModel<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList & string,
  ViewModel extends object,
  Deps extends object,
>(
  ScreenComponent: ComponentType<ViewModel>, // The screen component that will receive the view model as props
  useViewModel: (
    props: BaseViewModelProps<
      {
        navigation: NativeStackNavigationProp<ParamList, RouteName>;
        route: RouteProp<ParamList, RouteName>;
      },
      Deps
    >,
  ) => ViewModel,
  deps?: Deps,
) {
  return function ViewModelWrapper() {
    const navigation = useNavigation<NativeStackNavigationProp<ParamList, RouteName>>();
    const route = useRoute<RouteProp<ParamList, RouteName>>();

    const viewModel = useViewModel({
      navigation,
      route,
      ...(deps || ({} as Deps)),
    });

    return <ScreenComponent {...viewModel} />;
  };
}
