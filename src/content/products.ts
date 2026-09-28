export type ProductId = 'duplex-185' | 'cottage-228';

// Areas below are read from the developer layouts (LUN listings, presentation p. 17–19).
// No prices, inventory or delivery dates.
export const duplex185 = {
  id: 'duplex-185',
  name: 'Дуплекс',
  fullName: 'Дуплекс 185 м²',
  href: '/duplex-185/',
  areaM2: 185,
  landSotkas: 4.5,
  floors: 2,
  ceilingM: 3,
  parking: { spaces: 2 },
  highlights: [
    { value: '42', unit: 'м²', text: 'кухня-вітальня з виходом на терасу і в двір' },
    { value: '22', unit: 'м²', text: 'кабінет на другому поверсі — або третя спальня' },
    { value: '3', unit: 'м', text: 'висота стель: простір, якого не дає квартира' },
    { value: '3', unit: '', text: 'санвузли: гостьовий унизу, два — біля спалень' },
  ],
  source: 'docs/01-project-brief.md; docs/13-presentation.pdf p. 10, 19',
} as const;

export const cottage228 = {
  id: 'cottage-228',
  name: 'Окремий котедж',
  fullName: 'Котедж 228 м²',
  href: '/cottage-228/',
  areaM2: 228,
  landSotkas: 6.94,
  floors: 2,
  parking: { spaces: 2, covered: true },
  highlights: [
    { value: '68', unit: 'м²', text: 'кухня, їдальня й вітальня — один великий простір' },
    { value: '34', unit: 'м²', text: 'відкрита тераса на другому поверсі' },
    { value: '2', unit: '', text: 'спальні нагорі — кожна з гардеробною та окремим санвузлом' },
    { value: '0', unit: '', text: 'спільних стін із сусідами' },
  ],
  // Official project page lists 5 detached cottages in the masterplan.
  masterplanCount: 5,
  source: 'docs/01-project-brief.md; LUN layout Type5-12; stonedevelopment.com.ua',
} as const;

export const products = [duplex185, cottage228] as const;
export const productById = (id: ProductId) => (id === 'duplex-185' ? duplex185 : cottage228);
