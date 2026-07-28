import { Spot } from './useSpot';

export type Travel = {
  id: string;
  title: string;
  description: string;
  total?: number;
  place: string;
  image: string | null;
  spots: Spot[];
};
