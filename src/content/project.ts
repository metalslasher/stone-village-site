export const project = {
  name: 'Stone Village',
  developer: 'Stone Development',
  locale: 'uk-UA',
  location: 'Конопниця, Львівська область',
  primaryAction: 'Записатись на перегляд',
  description: 'Закрите котеджне містечко біля лісу під Львовом. Дуплекси 185 м² і окремі котеджі 228 м² з власними ділянками, терасами та паркомісцями.',
} as const;

// Official project page and presentation (last page); replace centrally.
export const salesContact = {
  label: '063 781 87 87',
  href: 'tel:+380637818787',
  source: 'https://stonedevelopment.com.ua/projects/stone_village',
} as const;

export const salesOffice = {
  phones: [
    { label: '063 781 87 87', href: 'tel:+380637818787' },
    { label: '096 781 87 87', href: 'tel:+380967818787' },
  ],
  address: 'Львів, вул. Героїв УПА, 73а',
  developerUrl: 'https://stonedevelopment.com.ua/',
  source: 'docs/13-presentation.pdf, p. 28',
} as const;
