export type BackGroundTemplate = {
  id: string;
  template: BackGroundTemplateType;
  bgImage: string[];
  day: number;
  travelId: string;
};

export const BackGroundTemplate = {
  none: 'none',
  one: 'one',
  twoLeft: 'twoLeft',
  twoRight: 'twoRight',
  four: 'four',
} as const;

export type BackGroundTemplateType = typeof BackGroundTemplate[keyof typeof BackGroundTemplate];