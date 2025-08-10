import { useStore } from '../../globalState';
import { ProfileViewModelProps } from './ProfileTypes';

const useProfileViewModel = ({}: ProfileViewModelProps) => {
  const { data } = useStore(state => state);

  return { data };
};

export { useProfileViewModel };
