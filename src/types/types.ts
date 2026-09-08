export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export interface UserData {
  _id: string;
  name: string;
  about: string;
  avatar: string;
}

export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
};

export type HandleCardClick = (name: string, link: string) => void;

export interface ApiConfig {
  baseUrl: string;
  headers: {
    authorization: string;
    'Content-Type': string;
  };
}

export interface UserProfileFormData {
  name: string;
  about: string;
}

export interface CardFormData {
  name: string;
  link: string;
}

export interface AvatarFormData {
  avatar: string;
}

export interface CurrentUserContextType {
  currentUser: UserData | null;
}
