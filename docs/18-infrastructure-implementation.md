> **Історичний звіт.** Описує стан на момент цього етапу, а не чинні завдання. Формулювання «зараз», «далі», «ще не зроблено» та попередні рішення нижче не відновлювати автоматично. Актуальний стан: [00-current-state.md](00-current-state.md). Збережено для джерел і результатів перевірок.

# Infrastructure section

Implemented September 6, 2026 after the environment/location narrative.

## Composition and content

`InfrastructureStory.astro` presents the entrance at large scale, followed by four editorial rows about children's spaces, sport, work areas and the neighbouring Stone Space pools. A closing note introduces management and guest parking. No readiness categories, commercial conditions, cards, icon grid or extra CTA were added.

Content is maintained in `src/content/infrastructure.ts`, based on docs 01/04/05. The design follows doc 06's Montana everyday-life narrative and PROMIN concrete infrastructure principles. Detailed safety and house presentations remain later sections.

## Media

`src/assets/infrastructure/village-entrance.jpg` is the developer visualization from research asset 001, with its source recorded in content metadata. It illustrates the community entrance, not the appearance of individual amenities. No unrelated stock amenity photos or extracted presentation blocks are used. Astro generates four lazy-loaded responsive WebP sizes, approximately 29–168 kB.

## Verification

- Astro check and production build passed without errors or warnings.
- Chromium layout checked at 320, 390, 768, 1024, 1440 and 1920 px; no horizontal overflow.
- Desktop and mobile infrastructure navigation targets verified; mobile menu closes after selection.
- Desktop/mobile screenshots inspected, then copy shortened and heading revised; final screenshots captured in output/playwright.
- Browser console has no errors. Safari, Firefox and physical mobile-device checks remain for broader release QA.
