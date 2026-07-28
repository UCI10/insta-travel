import { atom } from 'jotai'
import { Spot } from '../types/useSpot';
import dayjs, { Dayjs }  from 'dayjs';
import { createRandom } from '@/features/utils/random';

const now = dayjs();

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

export const currentSpotAtom = atom(
  (get) => get(spotAtom),
  (get, set, newSpot: {key: string, value: string|number|Dayjs}) => {
    const currentSpot = get(spotAtom);
    set(spotAtom, { ...currentSpot, [newSpot.key]: newSpot.value });
  }
);