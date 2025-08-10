import {
  BaseViewModelProps,
  HomeScreenNavigationProps,
} from '../../navigation/NavigationTypes';
import { GetUserUseCase } from '../../useCases/GetUserUseCase';
import { useHomeViewModel } from './HomeViewModel';

type HomeScreenProps = ReturnType<typeof useHomeViewModel>;

type HomeViewModelProps = BaseViewModelProps<
  HomeScreenNavigationProps,
  { getUserUseCase: GetUserUseCase }
>;

export type { HomeScreenProps, HomeViewModelProps };
