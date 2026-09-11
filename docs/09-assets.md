# Stone Village --- Asset Map

Чинне уточнення: користувач дозволив генерації/перегенерації на основі Stone Village зі збереженням характеру архітектури. Вибирати якісне доречне медіа; тільки документальні фото можуть бути доказом фактичного стану. Класифікація фото/рендер/генерація — в інвентарі й доречному alt, без обов’язкових видимих бейджів чи очевидних підписів. Презентація та вбудовані інформаційні схеми — довідка, не готові блоки для вставлення замість HTML. Потреби нижче — карта можливих assets, не список блокерів; джерела й наявні обмеження — [00-current-state.md](00-current-state.md).

## Purpose

This file defines what visual evidence the website should use and how
assets should be classified.

Do not invent filenames until original assets are added to the
repository.

## 1. Required asset groups

### Brand

-   Stone Village logo --- SVG preferred;
-   Stone Development logo --- SVG preferred;
-   brand mark / tree-ring symbol if separate;
-   current brand colours;
-   current typefaces / licences if applicable.

### Hero candidates

Need the strongest available: - real wide shot of Stone Village; -
architectural exterior with environment; - aerial / drone view; -
high-end video showing architecture + territory + forest; -
high-resolution render only if real hero material is weaker.

Hero asset criteria: - premium composition; - enough negative space for
text; - clearly Stone Village; - architecture visible; - environment
visible; - high resolution; - works in 16:9 and can survive mobile crop.

### Duplex 185

-   front exterior;
-   rear / terrace;
-   yard;
-   parking;
-   first-floor plan;
-   second-floor plan;
-   interior visualisations;
-   construction details;
-   real completed example if available.

### Cottage 228

-   front exterior;
-   rear / terrace;
-   private land;
-   covered parking;
-   first-floor plan;
-   second-floor plan;
-   safe-room / shelter evidence if approved;
-   interior visualisations;
-   construction progress.

### Environment

-   internal streets;
-   landscaping;
-   entrance / gate;
-   forest boundary;
-   walking routes;
-   night lighting;
-   seasonal photography.

### Infrastructure

-   children's playground;
-   sports field;
-   gym;
-   pools / Stone Space;
-   workspace;
-   commercial premises;
-   guest parking;
-   shelter;
-   pet area;
-   kindergarten if real/available.

### Proof

-   completed phases;
-   houses in use;
-   real streets;
-   residents only with permission;
-   construction progress;
-   handovers;
-   technical construction photography.

### Location

-   map;
-   route;
-   nearby infrastructure;
-   drone/context view showing relation to Lviv if available.

### Masterplan

-   high-resolution masterplan;
-   SVG / vector preferred;
-   current product positions if verified;
-   infrastructure markers.

### Developer

-   Stone Development team / office only if useful;
-   completed projects;
-   developer logo.

## 2. Asset priority

A --- essential: - hero; - real architecture; - 185 product; - 228
product; - plans; - forest; - masterplan; - location.

B --- strongly recommended: - infrastructure; - real completed
environment; - construction; - technical details; - Stone Space access.

C --- optional: - people; - interiors; - seasonal lifestyle; - developer
team.

## 3. Asset usage rules

-   never use a low-resolution asset as a full-screen visual;
-   never upscale visibly soft images for premium sections;
-   mark render vs real photo in internal metadata;
-   do not mix radically different render styles in one visual sequence;
-   avoid repeated use of the same hero image across many sections;
-   preserve architectural verticals and natural perspective;
-   do not over-darken images only to make white text readable;
-   crop around architecture, not around UI convenience.

## 4. Recommended repository structure

/assets /brand /hero /duplex-185 /cottage-228 /environment /forest
/infrastructure /proof /construction /plans /masterplan /location
/interiors /video

## 5. Metadata

After assets are added, create a small inventory for each file: -
filename; - category; - real photo / render / plan / video; - product; -
date if known; - resolution; - approved for public use; - recommended
use; - notes.

## 6. Visual source note

The official Stone Village page and LUN currently expose a meaningful
pool of project imagery, including architecture, territory, yards and
interiors. For production, use original developer files rather than
downloaded compressed website versions whenever possible.
