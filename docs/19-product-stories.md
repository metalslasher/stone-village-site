> **Історичний звіт.** Описує стан на момент цього етапу, а не чинні завдання. Формулювання «зараз», «далі», «ще не зроблено» та попередні рішення нижче не відновлювати автоматично. Актуальний стан: [00-current-state.md](00-current-state.md). Збережено для джерел і результатів перевірок.

# Product stories — September 7, 2026

Homepage implementation adds DuplexStory, CottageStory and the shared functional ProductPlans viewer. Each product has a separate visual composition; no generic product cards or new UI dependency.

- Duplex: stone background, terrace image beside family narrative, 185 m² scale, private yard/home office/parking facts. Mobile image precedes supporting text and facts use compact rows.
- Cottage: paper background, broad independent-house landscape, 228 m² type alongside heading, separate land/parking/planning narrative below image.
- Product navigation anchors and header/menu “Будинки” added. Shared viewing CTA follows both stories.
- Plan dialogs lazy-load their images on opening or floor selection. Native modal focus containment, Escape, close button, backdrop click and return focus. Each floor has an original-file link.

## Sources and assets

Project facts: docs 01–05. Art direction: docs 06–08. No prices, availability, completion dates or safety guarantees included.

Exterior renders copied from official research assets 021 (duplex terrace) and 025 (cottage garden). The pool is part of a developer landscaping visualization, not stated to be included in the purchase; caption identifies a landscaping option.

Plans downloaded from LUN product-specific listings:
- Duplex185 / Type3: https://lun.ua/new/lviv/konopnytsia-stone-village-cottages-projects/6053 ; image IDs12731 and12732.
- Cottage228 / Type5-12: https://lun.ua/new/lviv/konopnytsia-stone-village-cottages-projects/7029 ; image IDs14516 and14517.
- Image pattern: https://lun-images.lunstatic.net/bd-ua-01/t.1.0.0/1600/1600/cottage-typical-project/layout/{id}.jpg

Downloaded plans remain low-resolution originals (approximately 313–374 px wide); no invented/redrawn geometry. Replace public/media/plans files with developer originals when available. Exterior images use Astro responsive WebP.

## Validation

Astro check and build pass. Chromium checks at320/390/768/1024/1440/1920: no page overflow, both dialogs open, floors switch and load, Escape closes and returns focus. Desktop/mobile screenshot review followed by mobile fact-row refinement. Broader cross-browser and device QA remains before release. Separate product pages and lead integrations are later work.
