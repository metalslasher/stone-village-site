export const location = {
  // Official project's route link resolves to the Stone Village place, not its Lviv sales office.
  latitude: 49.8092053,
  longitude: 23.8697796,
  mapUrl: 'https://maps.app.goo.gl/QoVnwwwbT1iyiRm66',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=49.8092053,23.8697796',
  embedUrl: 'https://maps.google.com/maps?q=49.8092053,23.8697796&z=15&hl=uk&output=embed',
  address: 'Конопниця, вул. Дзеркальна',
};

// Presentation page 4. Mode of travel is not specified; do not label these as walking times.
export const nearbyRoutes = [
  { title: 'Лапаївське лісництво', minutes: 1 },
  { title: 'Школа', minutes: 3 },
  { title: 'АЗС, супермаркет', minutes: 5 },
  { title: 'METRO Cash & Carry', minutes: 6 },
  { title: 'Епіцентр', minutes: 7 },
  { title: 'Суховільське озеро', minutes: 7 },
  { title: 'Зоологічний парк', minutes: 9 },
  { title: 'Victoria Gardens', minutes: 17 },
  { title: 'King Cross Leopolis', minutes: 20 },
  { title: 'Оперний театр', minutes: 25 },
] as const;
