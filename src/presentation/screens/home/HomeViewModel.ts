import { useStore } from '@app/globalState';
import { SCREEN_NAMES } from '@app/navigation/ScreenNames';
import { HomeViewModelProps } from './HomeTypes';

const useHomeViewModel = ({ navigation, getUserUseCase }: HomeViewModelProps) => {
  // -------------- global state  -------------- //
  const {
    data: { counter, name },
    incrementCounter: incrementCounterStore,
    updateName,
  } = useStore(state => state);

  // -------------- methods -------------- //
  const onPressGetUser = async () => {
    const user = await getUserUseCase.execute(22);
    updateName(user);
    getUserUseCase.execute;
  };

  const incrementCounter = () => {
    incrementCounterStore(1);
  };

  const navigateToProfile = () => {
    navigation.navigate(SCREEN_NAMES.PROFILE, { counter });
  };

  // -------------- attributes -------------- //
  const attributes = {
    counter,
    name,
  };

  // -------------- methods -------------- //
  const methods = {
    incrementCounter,
    onPressGetUser,
    navigateToProfile,
  };

  return {
    ...attributes,
    ...methods,
  };
};

// ---------- Exported viewModel and Types ---------- //
export { useHomeViewModel };
