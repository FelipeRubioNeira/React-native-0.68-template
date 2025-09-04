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
    const result = await getUserUseCase.execute(22);
    if (!result.ok) {
      console.log('Mostrar mensaje de error al usuario:', result.error);
      return;
    }
    const user = result.value;
    updateName(user.name);
    console.log('Se ha llamado al caso de uso y el nombre es: ', user);
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
