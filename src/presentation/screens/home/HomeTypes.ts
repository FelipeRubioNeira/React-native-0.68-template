import { BaseViewModelProps, HomeScreenNavigationProps } from '@app/navigation/NavigationTypes';
import { GetUserUseCase } from '@app/useCases/GetUserUseCase';
import { useHomeViewModel } from './HomeViewModel';

type HomeScreenProps = ReturnType<typeof useHomeViewModel>;

type HomeViewModelProps = BaseViewModelProps<
  HomeScreenNavigationProps,
  { getUserUseCase: GetUserUseCase }
>;

export type { HomeScreenProps, HomeViewModelProps };
