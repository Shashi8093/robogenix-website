export interface GalleryImage {
  url: string;
  caption?: string;
}

export interface BaseEventProps {
  title: string;
  date: string;
  image: string;
  description: string;
  gallery: GalleryImage[];
}

export interface UpcomingEventProps extends BaseEventProps {}

export interface PastEventProps extends BaseEventProps {
  location: string;
  participants: number;
}