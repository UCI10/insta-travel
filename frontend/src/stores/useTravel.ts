import { atom } from 'jotai'
import { Travel } from '../types/useTravel';
import { Spot } from '../types/useSpot';
import dayjs, { Dayjs }  from 'dayjs';
import { createRandom } from '@/features/utils/random';

const now = dayjs();

const travelAtom = atom<Travel>({
  id: createRandom(),
  title: '',
  description: '',
  total: 1,
  place: '',
  image: null,
  spots: [],
});

const spotAtom = atom<Spot>({
  id: createRandom(),
  name: '',
  description: '',
  transport: 'train',
  stayTimeArrival: now,
  stayTimeleave: now.add(1, 'hour'),
  image: null,
  day: 1,
  travelId: '',
});

export const currentTravelAtom = atom(
  (get) => get(travelAtom),
  (get, set, newTravel: {key: string, value: string | Spot[]}) => {
    const currentTravel = get(travelAtom);
    set(travelAtom, { ...currentTravel, [newTravel.key]: newTravel.value });
  }
);

export const currentSpotAtom = atom(
  (get) => get(spotAtom),
  (get, set, newSpot: {key: string, value: string|number|Dayjs|Spot}) => {
    const currentSpot = get(spotAtom);
    if (newSpot.key === 'all') {
      set(spotAtom, newSpot.value as Spot);
    } else {
      set(spotAtom, { ...currentSpot, [newSpot.key]: newSpot.value });
    }
  }
);
