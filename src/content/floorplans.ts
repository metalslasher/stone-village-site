import type { ProductId } from './products';

export interface FloorRoom { name: string; area?: string }
export interface Floor { title: string; text: string; total?: string; rooms: FloorRoom[]; width: number; height: number }

// Room areas are read from the developer layouts published on LUN
// (Duplex185 / Type3, Cottage228 / Type5-12) and presentation p. 17–19.
// This is one proposed layout, not a promise that all modifications are feasible.
export const floorplans: Record<ProductId, Floor[]> = {
  'duplex-185': [
    {
      title: 'Перший поверх — для спільного життя.',
      text: 'Кухня-вітальня займає всю задню частину будинку й відкривається на терасу та в двір. Окреме господарське приміщення забирає побут із житлових кімнат.',
      total: '79,2',
      rooms: [
        { name: 'Кухня-вітальня', area: '42,2' },
        { name: 'Господарське приміщення', area: '13,1' },
        { name: 'Хол і передпокій', area: '11,5' },
        { name: 'Гостьовий санвузол', area: '2,5' },
        { name: 'Тераса', area: '4,6' },
      ],
      width: 374, height: 677,
    },
    {
      title: 'Другий поверх — приватний.',
      text: 'Спальні, кабінет і два санвузли відокремлені від гостей і кухні. Кабінет 22 м² легко стає третьою спальнею, коли родина росте.',
      total: '106,2',
      rooms: [
        { name: 'Головна спальня з балконом', area: '22,9' },
        { name: 'Кабінет або спальня', area: '22,0' },
        { name: 'Спальня з виходом на терасу', area: '17,1' },
        { name: 'Гардеробна', area: '6,1' },
        { name: 'Два санвузли', area: '12,5' },
      ],
      width: 357, height: 594,
    },
  ],
  'cottage-228': [
    {
      title: 'Перший поверх — простір, де збирається родина.',
      text: 'Кухня, їдальня й вітальня з’єднані в один світлий простір із виходом на терасу. Тут же — дві окремі кімнати, санвузол і безпечна кімната, позначена в плануванні.',
      rooms: [
        { name: 'Вітальня-їдальня', area: '43,4' },
        { name: 'Кухня', area: '24,9' },
        { name: 'Кімната', area: '16,1' },
        { name: 'Кімната', area: '13,1' },
        { name: 'Безпечна кімната' },
        { name: 'Тераса', area: '19,5' },
      ],
      width: 316, height: 537,
    },
    {
      title: 'Другий поверх — спальні й тераса на даху.',
      text: 'Дві спальні, кожна з гардеробною та окремим санвузлом. Відкрита тераса 34 м² — для сніданків, вечірнього світла й тиші над садом.',
      rooms: [
        { name: 'Спальня', area: '16,7' },
        { name: 'Спальня', area: '14,7' },
        { name: 'Дві гардеробні', area: '12,6' },
        { name: 'Два санвузли', area: '12,8' },
        { name: 'Відкрита тераса', area: '34,1' },
      ],
      width: 313, height: 437,
    },
  ],
};
