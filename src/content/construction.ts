// Duplex technical sheet: docs/13-presentation.pdf p. 10–11; official project page.
// Do not transfer duplex materials to the 228 m² cottage without confirmation.
export const duplexSpecs = [
  { figure: '380', unit: 'мм', title: 'Стіни з керамічного блоку', text: 'Плюс 100 мм утеплення пінополістиролом. Перегородки — з керамічної цегли.' },
  { figure: '5', unit: 'камер', title: 'Вікна REHAU', text: 'П’ятикамерний профіль і технологія «теплого монтажу».' },
  { figure: '3', unit: 'м', title: 'Висота стель', text: 'Більше повітря й світла в кожній кімнаті.' },
  { figure: '15', unit: 'кВт', title: 'Електропотужність', text: 'Потужність із запасом для кухні й техніки. Газ підведено.' },
] as const;

export const duplexDetails = [
  { title: 'Фундамент і дах', text: 'Монолітний гідроізольований та утеплений фундамент. Монолітне перекриття, утеплення й ПВХ-мембрана.' },
  { title: 'Фасад', text: 'Два види декоративної штукатурки, керамограніт на вхідній групі й балконах, скло-триплекс, LED-підсвітка.' },
  { title: 'Вхідні двері STRAJ', text: 'Броньовані двері з подвійним утеплювачем.' },
  { title: 'Інтернет', text: 'Оптоволокно — для роботи з дому й відеозв’язку без затримок.' },
] as const;

// Community-level engineering (official page technical characteristics).
export const communityEngineering = [
  { title: 'Опалення', text: 'Індивідуальне — ви самі керуєте температурою й витратами.' },
  { title: 'Вода', text: 'Індивідуальне водопостачання зі свердловини.' },
  { title: 'Каналізація', text: 'Централізована.' },
  { title: 'Стан при передачі', text: 'Чорнове оздоблення: інтер’єр — під ваш проєкт, без переробок чужого ремонту.' },
] as const;
