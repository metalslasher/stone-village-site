# Stone Village --- Motion Direction

Чинне уточнення: потрібна помітна, але стримана динаміка. Не зводити вимогу до майже непомітних hover-ефектів. Дозволені розкриття великих зображень і scroll-історія галереї без перехоплення колеса; для mobile/reduced motion — спрощення. Перемикання 185 ↔ 228 нижче є можливою ідеєю, не вимогою замінити дві окремі продуктові композиції. Поточні рішення — [00-current-state.md](00-current-state.md).

## 1. Motion objective

Motion should make the website feel architectural, calm and crafted.

It must never become the main attraction.

## 2. Character

Use: - slow; - restrained; - physical; - cinematic; - smooth; -
purposeful.

Avoid: - bouncy; - playful startup motion; - constant floating; -
exaggerated elastic easing.

## 3. Hero

Allowed: - subtle video; - slow image scale; - controlled text reveal; -
minimal parallax; - navigation transition.

Avoid: - long loading animation; - letters flying individually; - 3D
house spinning; - excessive scroll instruction.

## 4. Scroll storytelling

Good candidates: - forest / city narrative; - infrastructure chapters; -
product reveal; - masterplan; - proof gallery.

Possible patterns: - sticky text with changing image; - horizontal image
progression; - masked image reveal; - subtle clip-path transitions; -
crossfade between product states.

## 5. Image motion

Preferred: - gentle reveal; - crop transition; - controlled scale; -
crossfade; - small parallax.

Avoid: - aggressive zoom; - random rotation; - floating cards; -
perpetual motion.

## 6. Typography motion

Use sparingly: - opacity + translate; - line reveal; - section title
transition.

Do not animate every paragraph.

## 7. Product transition

Switching 185 ↔ 228 can have a deliberate transition: - architecture
image changes; - plan changes; - land / key facts update; - background
tone may subtly shift.

It should feel like selecting a living scenario, not switching ecommerce
SKUs.

## 8. Masterplan

If interactive: - hover / tap highlighting; - smooth focus; - clear
labels; - no complex 3D unless asset quality justifies it.

## 9. Microinteractions

Buttons: - subtle state change; - small directional movement if used
consistently.

Links: - refined underline / arrow movement.

Forms: - clear focus and validation states.

## 10. Performance

Motion must: - preserve fast first paint; - avoid huge autoplay assets
on mobile; - lazy-load below-the-fold media; - respect
prefers-reduced-motion; - avoid blocking scroll.

## 11. Mobile

Reduce motion complexity. Do not reproduce heavy desktop scroll effects
if they make mobile slower or less clear.

## 12. Motion QA

For every animation ask: - does it explain something? - does it improve
hierarchy? - does it reinforce premium feel? - would the section still
work without it?

The section must remain usable without animation. Keep motion when it has a clear purpose in hierarchy, spatial continuity or visual character; it need not satisfy every benefit at once. Remove purposeless or obstructive motion, not all expressive motion.
