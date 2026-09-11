> **Історичний звіт.** Описує стан на момент цього етапу, а не чинні завдання. Формулювання «зараз», «далі», «ще не зроблено» та попередні рішення нижче не відновлювати автоматично. Актуальний стан: [00-current-state.md](00-current-state.md). Збережено для джерел і результатів перевірок.

# Village introduction and environment story

Implemented after the approved hero, September 6, 2026.

- `VillageIntroduction.astro`: light editorial pause, offset heading, street-level architectural image and short everyday-life narrative. Mobile uses a full-width image and compact text.
- `EnvironmentStory.astro`: city/forest narrative, wide panorama, 2.5 km distance from the project Bible, Google Maps utility link. Mobile retains more of the forest with a 1.35:1 crop.
- Navigation now targets `#about` and `#location` in desktop and mobile menus.
- No cards, added animation library or client JavaScript for these sections.

## Media provenance

Both images are developer visualizations, visibly captioned as such, not photography of completed construction.

- `src/assets/environment/village-street.jpg`: research file 067, https://static.tildacdn.net/tild3634-3463-4136-b262-373532346463/Render_4_2.jpg
- `src/assets/environment/village-forest.jpg`: research file 065, https://static.tildacdn.net/tild6134-3665-4538-a338-396661356562/_-min.jpg
- Source project page: https://stonedevelopment.com.ua/projects/stone_village

Astro generates responsive WebP variants with dimensions and lazy loading. Originals remain in the research archive. Actual project photography is still needed for the later proof section.

## Design rationale

Uses Horizonte's image scale and editorial restraint, and Montana's narrative sequencing and everyday-life interpretation of forest access, as extracted in doc 06. No reference identity is copied. These sections do not duplicate the removed hero facts or introduce house catalogue cards.
