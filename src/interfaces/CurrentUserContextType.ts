import type { UserData, UserProfileFormData } from './UserData';

export interface CurrentUserContextType {
  currentUser: UserData | null;
  handleUpdateUser: (data: UserProfileFormData) => void;
}
