export interface CardData {
  _id: string;
  name: string;
  link: string;
  owner: string;
  createdAt: string;
  isLiked: boolean;
}

export type PopupConfig = {
  title?: string;
  children: React.ReactNode;
};

export type HandleCardClick = (name: string, link: string) => void;
