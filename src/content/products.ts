export type ProductId = 'duplex-185' | 'cottage-228';

// Working values from Project Bible. No prices, inventory or delivery dates.
export const duplex185 = {
  id: 'duplex-185',
  name: 'Дуплекс',
  areaM2: 185,
  landSotkas: 4.5,
  story: 'Простір для сім’ї, роботи та власного двору.',
  parking: { spaces: 2 },
  source: 'docs/01-project-brief.md',
} as const;

export const cottage228 = {
  id: 'cottage-228',
  name: 'Окремий котедж',
  areaM2: 228,
  landSotkas: 6.94,
  story: 'Окремий будинок із більшою особистою територією.',
  parking: { spaces: 2, covered: true },
  source: 'docs/01-project-brief.md',
} as const;
