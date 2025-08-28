import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SCREEN_NAMES } from './ScreenNames';

// parametros de navegación que recibe cada pantalla
type RootStackParamList = {
  [SCREEN_NAMES.HOME]: undefined;
  [SCREEN_NAMES.PROFILE]: { counter: number };
};

// ------------ navigation props of each screen ------------ //
type HomeScreenNavigationProps = NativeStackScreenProps<RootStackParamList, SCREEN_NAMES.HOME>;

type ProfileScreenNavigationProps = NativeStackScreenProps<
  RootStackParamList,
  SCREEN_NAMES.PROFILE
>;

type BaseViewModelProps<NavProps, UseCases = {}> = NavProps & UseCases;

type ScreenWrappersType = Record<SCREEN_NAMES, React.ComponentType<any>>;

// ------------ Exported Types ------------ //
export type {
  RootStackParamList,
  HomeScreenNavigationProps,
  ProfileScreenNavigationProps,
  BaseViewModelProps,
  ScreenWrappersType,
};
