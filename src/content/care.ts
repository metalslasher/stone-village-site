// Management company services: docs/13-presentation.pdf p. 27. Safety: official project page.
// Wording avoids legal guarantees about shelter protection.
export const careServices = [
  'Охорона та відеонагляд',
  'Прибирання вулиць і вивіз сміття',
  'Освітлення території',
  'Догляд за зеленими насадженнями',
  'Ремонт доріг і спільних просторів',
  'Обслуговування інженерних мереж',
] as const;

export const safety = [
  { title: 'Закрита територія', text: 'В’їзд через шлагбаум, охорона й цілодобове відеоспостереження.' },
  { title: 'Укриття', text: 'Облаштовані укриття передбачені на території містечка. У котеджах 228 м² — ще й безпечна кімната в плануванні.' },
  { title: 'Гостьовий паркінг', text: 'Гості не займають вулицю й ваші паркомісця.' },
] as const;
