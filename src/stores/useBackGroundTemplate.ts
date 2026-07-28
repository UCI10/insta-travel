import { atom } from 'jotai'
import { BackGroundTemplate, BackGroundTemplateType } from '@/types/useBackGroundTemplate';
import { createRandom } from '@/features/utils/random';

const backgroundTemplateAtom = atom<BackGroundTemplate>({
  id: createRandom(),
  template: BackGroundTemplate.none,
  bgImage: [],
  day: 1,
  travelId: '',
});

export const currentBackgroundTemplateAtom = atom(
  (get) => get(backgroundTemplateAtom),
  (get, set, newBGImage: {key: string, value: string|number|BackGroundTemplateType|string[]}) => {
    const currentBGImage = get(backgroundTemplateAtom);
    set(backgroundTemplateAtom, { ...currentBGImage, [newBGImage.key]: newBGImage.value });
  }
);