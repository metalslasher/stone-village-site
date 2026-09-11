# Stone Village --- Design Direction

Чинне уточнення: свобода композиції зберігається. Приклади нижче — можливості, не обов’язкові секції. Negative space має підтримувати масштаб і баланс, а не залишати порожню половину екрана. Стриманість не забороняє помітну анімацію. Для компактних характеристик перевага відкритій верстці; акордеон доречний лише за реальної потреби приховувати деталі. У hero не повертати прибрану смугу локації/площ або продуктовий selector. Чинні рішення — [00-current-state.md](00-current-state.md).

## 1. Design objective

Create a premium real-estate landing page that feels designed by an
architectural / editorial studio, not generated from a generic
landing-page template.

The interface should make Stone Village feel: - established; - calm; -
substantial; - architectural; - natural; - family-oriented; -
contemporary; - premium without ostentation.

## 2. Core design idea

**Quiet architectural living near nature.**

The visual system should balance: - architecture; - landscape; - warm
family life; - precise functional information.

The site should not feel like: - SaaS; - a property aggregator; - a
corporate developer template; - a luxury-fashion imitation.

## 3. Visual hierarchy

Priority order: 1. imagery / video; 2. headline; 3. spatial composition;
4. short explanatory copy; 5. product / proof details; 6. CTA; 7.
utility metadata.

The interface should support the content, not compete with it.

## 4. Layout

Desktop: - wide editorial grid; - generous page margins; - strong
alignment; - sections may break the grid intentionally; - use full-bleed
imagery at key moments; - mix asymmetrical editorial sections with
highly ordered factual sections; - avoid placing every section inside a
container/card.

Recommended rhythm: - immersive; - quiet; - informative; - immersive; -
product; - proof.

Do not use uniform section heights.

## 5. Typography

Desired character: - contemporary; - architectural; - high legibility; -
premium through proportion rather than decoration.

System: - one expressive display family or refined grotesk for large
headings; - one highly readable sans-serif for body/UI, or a single
strong family with multiple optical roles; - large headline scale; -
compact line length for body text; - restrained uppercase; - labels may
use tracking carefully.

Typography should create status even when the page contains no image.

Avoid: - ultra-rounded startup fonts; - futuristic tech fonts; -
decorative serif used only to "look premium"; - too many font families.

## 6. Colour

Use the existing Stone Village / Stone Development identity as the base,
but tune it toward a warm architectural palette.

Direction: - warm off-white / cream; - stone / sand; - deep brown /
chocolate; - restrained bronze / warm accent; - dark charcoal for
high-contrast moments; - natural green only if derived from photography
/ brand context.

Rules: - no decorative gradients unless a specific reference justifies
them; - no neon; - no excessive gold; - do not make the entire website
dark just to signal premium; - photography should supply much of the
colour.

## 7. Imagery

Imagery is a structural element, not decoration.

Priority: 1. real Stone Village environment; 2. real architecture; 3.
real forest / landscape; 4. real infrastructure; 5. plans / masterplan;
6. high-quality renders where real proof is unavailable; 7. interior
visualization.

Use: - large crops; - cinematic aspect ratios; - intentional close
details; - occasional full viewport imagery; - image sequences for
storytelling.

Avoid: - tiny thumbnails everywhere; - stock families; - artificial
luxury lifestyle photography; - image mosaics with no hierarchy.

## 8. Hero

Hero must not be a generic centred landing-page hero.

Preferred characteristics: - dominant image/video; - editorial text
placement; - strong asymmetry or intentional edge alignment; -
restrained UI; - one primary CTA; - location / project cue as secondary
information; - optional subtle product selector after the first visual
impression.

Hero should answer: "What is this place and why should I care?"

It should not answer every product question.

## 9. Section composition

Use multiple composition families.

Possible families: - full-screen visual + minimal copy; - 60/40
editorial split; - large typographic statement; - sticky narrative with
changing imagery; - horizontal product reveal; - masterplan / map
interaction; - image sequence; - technical detail accordion; - proof
gallery; - full-width conversion scene.

Do not repeat the same component more than necessary.

## 10. Product design

185 m² and 228 m² must feel like two distinct living scenarios.

### 185

Visual character: - practical sophistication; - transition from
apartment to house; - terrace / office / family zoning.

### 228

Visual character: - independence; - larger scale; - privacy; - private
territory; - stronger architectural presence.

Do not use two identical rounded cards side by side as the primary
product presentation.

## 11. UI elements

Buttons: - simple; - high contrast; - moderate radius or square/soft
corners based on final reference analysis; - no pill buttons by default.

Forms: - minimal; - premium; - clear; - few fields.

Icons: - use sparingly; - only when they improve scanning; - consistent
custom/simple line system.

Cards: - not a default layout mechanism.

## 12. Spacing

Premium perception requires breathing room.

Use: - generous vertical spacing around major narratives; - tighter
spacing inside factual groups; - deliberate contrast between dense and
quiet sections.

Avoid: - identical 96px padding on every section; - mechanically even
spacing; - empty space that has no compositional purpose.

## 13. Borders, shadows, radius

Borders: - subtle; - architectural; - used to structure information.

Shadows: - rare; - avoid floating-dashboard feel.

Radius: - restrained; - imagery can be square or subtly softened; - do
not round every rectangle.

## 14. Premium design rule

Whenever choosing between: A) adding decoration; B) improving
composition, scale, typography or imagery;

choose B.

## 15. Responsive design

Mobile is a separate composition, not compressed desktop.

Mobile principles: - maintain large visual impact; - preserve typography
hierarchy; - shorten line lengths; - simplify interactions; - sticky CTA
only if it does not obstruct the experience; - product choice must
remain clear; - no microscopic carousels; - avoid animation that delays
content.

## 16. Accessibility

-   sufficient contrast;
-   visible focus states;
-   semantic headings;
-   meaningful alt text;
-   reduced-motion support;
-   controls large enough for touch;
-   never place critical information only inside animation.

## 17. Final visual test

Before accepting any major section, ask: - Does it look like a real
premium residential brand? - Does it feel specifically like Stone
Village? - Could this section be pasted into a SaaS site with only text
changes? - Is the architecture/environment dominant enough? - Is there
unnecessary UI chrome? - Does the section have a clear visual idea? - Is
the design supported by a reference or by the Stone Village system?

If the section could belong to any AI-generated landing page, redesign
it.
