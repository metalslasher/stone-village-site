import aerial from '@/assets/infrastructure/shared-spaces.jpg';

// One developer aerial render (official 068-Render_8); each chapter moves a virtual
// camera to the matching area. Focus = transform-origin; the presentation (p. 6)
// identifies the court, gym building, playground and guard post in this view.
export const infrastructure = {
  image: aerial,
  alt: 'Візуалізація забудовника: спортивне поле, дитячий майданчик, спортзал і вулиці Stone Village згори',
  chapters: [
    {
      title: 'Для дітей',
      text: 'Майданчики для різного віку та власний дитячий садок на території. Діти граються поруч із домом, а ранок не починається з поїздки через місто.',
      focus: '42% 80%', scale: 2.2,
    },
    {
      title: 'Для спорту',
      text: 'Мультифункціональне поле для футболу, баскетболу й тенісу, спортивний майданчик, бігова доріжка й тренажерний зал із панорамними вікнами.',
      focus: '22% 64%', scale: 1.8,
    },
    {
      title: 'Для роботи й щоденних справ',
      text: 'Воркплейс для зустрічей і зосередженої роботи. Комерційні приміщення передбачені під супермаркет, кафе, аптеку та інші щоденні сервіси.',
      focus: '62% 36%', scale: 1.6,
    },
    {
      title: 'Для відпочинку',
      text: 'Мешканцям доступні два басейни сусіднього комплексу Stone Space із зоною відпочинку біля води. А ще — облаштована зона відпочинку в лісі.',
      focus: '50% 50%', scale: 1,
    },
  ],
} as const;
