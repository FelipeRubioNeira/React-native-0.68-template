import { container } from '@app/di/DiContainer';
import { GetUserUseCase } from '@app/domain/useCases/GetUserUseCase';
import { withViewModel } from './FactoryScreen';
import { useHomeViewModel, useProfileViewModel } from '@presentation/screens';
import { SCREEN_NAMES } from './ScreenNames';
import { ScreenWrappersType } from './NavigationTypes';
import { lazy } from 'react';

// 1. Resuelvo casos de uso / dependencias
const getUserUseCase = container.resolve<GetUserUseCase>(GetUserUseCase.name);

// 2. Creo los componentes lazily
const LazyHomeScreen = lazy(() =>
  import('@presentation/screens').then(({ HomeScreen }) => ({ default: HomeScreen })),
);
const LazyProfileScreen = lazy(() =>
  import('@presentation/screens').then(({ ProfileScreen }) => ({ default: ProfileScreen })),
);

// 3. Aplico el HOC a los componentes perezosos
export const screenWrappers: ScreenWrappersType = {
  [SCREEN_NAMES.HOME]: withViewModel(LazyHomeScreen, useHomeViewModel, { getUserUseCase }),
  [SCREEN_NAMES.PROFILE]: withViewModel(LazyProfileScreen, useProfileViewModel),
} as const;
