import {
  BaseViewModelProps,
  ProfileScreenNavigationProps,
} from '../../navigation/NavigationTypes';
import { useProfileViewModel } from './ProfileViewModel';

// props that the ProfileScreen will receive from the ViewModel
type ProfileScreenProps = ReturnType<typeof useProfileViewModel>;

// props that the ProfileScreen will receive from the ViewModel
type ProfileViewModelProps = BaseViewModelProps<ProfileScreenNavigationProps>;

export type { ProfileViewModelProps, ProfileScreenProps };
