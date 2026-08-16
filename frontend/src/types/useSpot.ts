import { Dayjs } from 'dayjs';

export type Spot = {
  id: string;
  name: string;
  description: string;
  transport: string;
  stayTimeArrival: Dayjs | string;
  stayTimeleave: Dayjs | string;
  image: string | null;
  day: number;
  travelId: string;
};
