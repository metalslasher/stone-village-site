# Stone Village --- Technical Requirements

## 1. General

Maintain the existing responsive Astro site. Current scope: content, design, media and responsive composition. See [00-current-state.md](00-current-state.md). Production integration requirements below are deferred reference, not current tasks.

The current implementation prioritizes visual fidelity, performance, accessibility and maintainability. Production SEO and analytics integrations belong to the deferred launch scope.

## 2. Framework

Use the existing Astro 7 + TypeScript 6 + native CSS stack. Preserve the established framework.

Do not migrate frameworks or add a large UI library unless explicitly
approved.

## 3. Component philosophy

Create components around meaningful design systems, not around arbitrary
card abstractions.

Good: - Hero - ProductStory - ProductPlan - EnvironmentStory -
Masterplan - ProofGallery - Location - ViewingForm

Avoid: - GenericCard - FeatureCard - GlassCard - GradientSection

unless they are genuinely part of the approved design system.

## 4. Responsive breakpoints

Use content-driven breakpoints.

At minimum verify: - small mobile; - large mobile; - tablet; - laptop; -
1440 desktop; - wide desktop.

## 5. Performance

Targets: - optimized responsive images; - AVIF/WebP where appropriate; -
explicit width/height; - lazy loading below fold; - preload only
critical assets; - avoid oversized JS bundles; - avoid loading all video
on mobile; - self-host fonts when licensing allows; - minimize layout
shift.

## 6. SEO by stage

Current: preserve unique titles, descriptions, semantic headings, readable HTML, meaningful alt and noindex for local review.
Future public launch only: real domain/canonical, social metadata, sitemap/robots and valid structured data. Do not invent a domain or remove noindex during design work.

## 7. Accessibility

-   semantic landmarks;
-   keyboard navigation;
-   visible focus;
-   form labels;
-   error messaging;
-   contrast;
-   reduced motion;
-   accessible dialogs;
-   no critical hover-only information.

## 8. Forms by stage

Current: the agreed visual form and existing local behavior; no delivery. Do not expand validation as a separate task or remove existing local checks without a request. Clearly communicate that preview data is not sent. See [11-conversion.md](11-conversion.md).
Future delivery stage only: server validation, appropriate spam protection, actual delivery, success/error states and agreed privacy materials.

## 9. Analytics — deferred

Do not implement analytics, dataLayer, tracking identifiers or conversion delivery during the current design/content stage. Future event design and integrations require a separately defined task and real configuration. Analytics is not a local visual-completion gate.

## 10. Media

-   use poster images for video;
-   no forced audio;
-   pause non-essential video when offscreen where possible;
-   support reduced data / mobile performance;
-   do not make hero dependent on video playback.

## 11. Animation

Follow 10-motion.md. Use performant properties. Avoid scroll handlers
that trigger layout thrashing. Prefer native CSS / lightweight animation
approach unless a library is justified.

## 12. Browser QA

Current changes: verify relevant interactions and desktop/mobile composition in the available browser; report the actual scope. Before public launch: broader Chrome, Safari, Firefox, Edge, iOS Safari and Android Chrome verification. Unavailable device checks are not claimed as passed and do not block local design review.

## 13. Visual QA

For every major visual implementation: 1. render desktop screenshot; 2. compare
with approved direction; 3. critique composition; 4. fix; 5. render
again.

Repeat separately for mobile.

## 14. Content safety

Do not hardcode unverified: - prices; - inventory; - completion dates; -
discounts; - financing; - legal safety guarantees.

Keep dynamic commercial content easy to update.

## 15. Documentation-only work

Check consistency, current/history boundaries and local links. Do not run website builds or browser tests for changes confined to documentation. Deferred launch requirements are not an automatic next-work queue.
