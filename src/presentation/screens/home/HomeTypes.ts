import { BaseViewModelProps, HomeScreenNavigationProps } from '@app/navigation/NavigationTypes';
import { useHomeViewModel } from './HomeViewModel';
import { IGetUserUseCase } from '@app/domain/useCases/interfaces';

type HomeScreenProps = ReturnType<typeof useHomeViewModel>;

type HomeViewModelProps = BaseViewModelProps<
  HomeScreenNavigationProps,
  { getUserUseCase: IGetUserUseCase }
>;

export type { HomeScreenProps, HomeViewModelProps };
